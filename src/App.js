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
];

function App() {
  let imageList = useRef(null);
  let quotesList = useRef(null);

  const [activeSlide, setactiveSlide] = useState(1);

  useEffect(() => {
    gsap.to(quotesList.children[0], {
      duration: 0,
      opacity: 1,
    });
  }, []);
  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div className="arrows left">
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
              <li>
                <div className="content-inner">
                  <p className="quote">{testimonials[0].quote}</p>
                  <h3 className="name">{testimonials[0].name}</h3>
                  <h4 className="title">{testimonials[0].title}</h4>
                </div>
              </li>

              <li>
                <div className="content-inner">
                  <p className="quote">{testimonials[1].quote}</p>
                  <h3 className="name">{testimonials[1].name}</h3>
                  <h4 className="title">{testimonials[1].title}</h4>
                </div>
              </li>

              <li>
                <div className="content-inner">
                  <p className="quote">{testimonials[2].quote}</p>
                  <h3 className="name">{testimonials[2].name}</h3>
                  <h4 className="title">{testimonials[2].title}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="arrows right">
          <span>
            <img src={rightArrow} alt="right arrow" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
