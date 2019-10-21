import React from "react";
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
      transform: "translate3d(-1800px,0,0)"
    },
    config: { duration: 1500 }
  });

  const props2 = useSpring({
    transform: "translate3d(0,0,0)",
    from: {
      transform: "translate3d(-1800px,0,0)"
    },
    config: { duration: 1800 }
  });

  const props3 = useSpring({
    transform: "translate3d(0,0,0)",
    from: {
      transform: "translate3d(-1800px,0,0)"
    },
    config: { duration: 2100 }
  });

  return (
    <section className="main" id="main">
      <div className="main-card">
        <div className="main-content">
          <animated.div style={props} className="main-image"></animated.div>
          <div style={props2} className="main-text">
            <animated.div style={props1} className="greet">
              <span className="hl">Hello,</span> Everyone !!
            </animated.div>
            <animated.div style={props2} className="name">
              I'm <span className="hl">ChangKeun</span> Ji,
            </animated.div>
            <animated.div style={props3} className="title">
              A <span className="hl">Front-end</span> Developer
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
