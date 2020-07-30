import React, { useRef, useEffect, useState } from "react";
import "./App.scss";
import leftArrow from "./assets/arrow-left.svg";
import rightArrow from "./assets/arrow-right.svg";
import gsap from "gsap";

const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: `${require("./assets/image3.jpg")}`,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${require("./assets/image.jpg")}`,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment.",
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `${require("./assets/image2.jpg")}`,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us.",
  },

  {
    name: "Seyi Oluwadare",
    title: "Brand Coordinator, Ijaya",
    image: `${require("./assets/image2.jpg")}`,
    quote:
      "The service was Amazing!!. Absolutely wonderful! A complete redesign did it for us.",
  },
];

function App() {
  let imageList = useRef(null);
  let quotesList = useRef(null);

  const imageWidth = 340;

  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    gsap.to(quotesList.children[0], {
      duration: 0,
      opacity: 1,
    });
  }, []);

  const slideLeft = (index, duration, multiple = 1) => {
    gsap.to(imageList.children[index], {
      duration,
      x: -imageWidth * multiple,
      ease: "Power3.easeOut",
    });
  };

  const slideRight = (index, duration, multiple = 1) => {
    console.log(index, multiple);
    gsap.to(imageList.children[index], {
      duration,
      x: imageWidth * multiple,
      ease: "Power3.easeOut",
    });
  };

  const scaleOut = (index) => {
    gsap.from(imageList.children[index], {
      duration: 1,
      scale: 1.2,
      ease: "Power3.easeOut",
    });
  };

  const nextSlide = () => {
    // if (imageList.children[0].classList.contains("active")) {
    //   setActiveSlide(2);
    // }

    if (activeSlide === testimonials.length) return;
    setActiveSlide(activeSlide + 1);

    if (activeSlide > 1) {
      slideLeft(activeSlide - 2, 1, activeSlide);
      slideLeft(activeSlide - 1, 1, activeSlide);
      scaleOut(activeSlide);
      slideLeft(activeSlide, 1, activeSlide);
    } else {
      slideLeft(activeSlide - 1, 1, activeSlide);
      slideLeft(activeSlide, 1, activeSlide);
      scaleOut(activeSlide);
      slideLeft(activeSlide + 1, 1, activeSlide);
    }

    gsap.to(quotesList.children[activeSlide - 1], {
      duration: 1,
      opacity: 0,
    });

    gsap.to(quotesList.children[activeSlide], {
      delay: 0.2,
      duration: 1,
      opacity: 1,
      ease: "Power3.easeOut",
    });
  };

  const prevSlide = () => {
    if (activeSlide === 1) return;
    setActiveSlide(activeSlide - 1);

    if (activeSlide > 2) {
      slideRight(activeSlide - 3, 1, activeSlide - 4);
      slideRight(activeSlide - 2, 1, activeSlide - 4);
      slideRight(activeSlide - 1, 1, activeSlide - 4);
    } else {
      slideRight(activeSlide - 2, 1, activeSlide - 2);
      slideRight(activeSlide - 1, 1, activeSlide - 2);
      slideRight(activeSlide, 1, activeSlide - 2);
    }

    gsap.to(quotesList.children[activeSlide - 1], {
      duration: 1,
      opacity: 0,
    });

    gsap.to(quotesList.children[activeSlide - 2], {
      delay: 0.2,
      duration: 1,
      opacity: 1,
      ease: "Power3.easeOut",
    });

    // slideRight(activeSlide - 1, 1, activeSlide);
  };
  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div onClick={prevSlide} className="arrows left">
          <span>
            <img src={leftArrow} alt="left arrow" />
          </span>
        </div>

        <div className="inner">
          <div className="t-image">
            <ul ref={(el) => (imageList = el)}>
              {testimonials.map(({ name, image }, i) => (
                <li
                  key={name}
                  className={`${activeSlide === i + 1 ? "active" : ""}`}
                >
                  <img src={image} alt={name} />
                </li>
              ))}
            </ul>
          </div>

          <div className="t-content">
            <ul ref={(el) => (quotesList = el)}>
              {testimonials.map(({ name, quote, title }, i) => (
                <li
                  key={name}
                  className={`${activeSlide === i + 1 ? "active" : ""}`}
                >
                  <div className="content-inner">
                    <p className="quote">{quote}</p>
                    <h3 className="name">{name}</h3>
                    <h4 className="title">{title}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div onClick={nextSlide} className="arrows right">
          <span>
            <img src={rightArrow} alt="right arrow" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
