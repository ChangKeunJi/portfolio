import React, { Component } from "react";
// import { useSpring, animated } from "react-spring";

class Nav extends Component {
  state = {
    active: false
  };

  handleChange() {
    const currentState = this.state.active;

    this.setState({ active: !currentState });
  }

  render() {
    return (
      <nav>
        <div className="hamburger" onClick={this.handleChange.bind(this)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={this.state.active ? "nav-link open" : "nav-link"}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Project</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
