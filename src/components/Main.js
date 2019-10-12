import React, { Component } from "react";
import "../style/main.scss";
import { useSpring, animated } from "react-spring";

const Main = () => {
  // Background Image
  const props = useSpring({
    opacity: 1,
    transform: "translate3d(0,0,0) scale(1) ",
    from: {
      opacity: 0,
      transform: "translate3d(-400px,0,0) scale(0.5)"
    }
  });

  // Text
  const props1 = useSpring({
    transform: "translate3d(0,0,0)",
    from: {
      transform: "translate3d(0,-800px,0)"
    },
    config: { duration: 1000 }
  });

  const props2 = useSpring({
    transform: "translate3d(0,0,0)",
    from: {
      transform: "translate3d(0,-800px,0)"
    },
    config: { duration: 1200 }
  });

  const props3 = useSpring({
    transform: "translate3d(0,0,0)",
    from: {
      transform: "translate3d(0,-800px,0)"
    },
    config: { duration: 1400 }
  });

  return (
    <section className="main">
      <section className="main-image">
        <div className="hero">
          <animated.img style={props} src="./img/home3.jpg" alt="image" />

          <h1 style={props2} className="main-text">
            <animated.div style={props1} className="greet">
              <span className="hl">Hello,</span> Everyone !!
            </animated.div>
            <animated.div style={props2} className="name">
              I'm <span className="hl">ChangKeun</span> Ji
            </animated.div>
            <animated.div style={props3} className="title">
              <span className="hl">Front-end</span> Developer
            </animated.div>
          </h1>
        </div>
      </section>
      <div className="slider"></div>
    </section>
  );
};

export default Main;
