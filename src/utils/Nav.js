import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Nav extends Component {
  state = {
    active: false
  };

  handleChange = () => {
    const currentState = this.state.active;

    this.setState({ active: !currentState });
  };

  handleClick = () => {
    this.setState({ active: false });
  };

  render() {
    return (
      <nav className={this.state.active ? "open" : null}>
        <div className="hamburger" onClick={this.handleChange}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul
          onClick={this.handleClick}
          className={this.state.active ? "nav-link open" : "nav-link"}
        >
          <Link
            className="nav-item"
            onClick={this.handleClick}
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            Home
          </Link>
          <Link
            className="nav-item"
            onClick={this.handleClick}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            About
          </Link>
          <Link
            className="nav-item"
            onClick={this.handleClick}
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            work
          </Link>
          <Link
            className="nav-item"
            onClick={this.handleClick}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            contact
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
