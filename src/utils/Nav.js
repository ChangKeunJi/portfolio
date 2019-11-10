import React, { Component } from "react";
import { Link } from "react-scroll";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
        <div className="nav-icon">
          <a
            href="https://www.linkedin.com/in/chang-keun-ji-847588178/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <br />
          <a
            href="https://github.com/ChangKeunJi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMarkGithub />
          </a>
          <br />
          <a href="mailto:changkeun.j@gmail.com">
            <MdEmail />
          </a>
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
            home
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
            about
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
