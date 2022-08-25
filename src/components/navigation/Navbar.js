import React, { useState } from "react";
import {
  RiMenu3Line,
  RiCloseLine,
  RiGithubFill,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/portfolio-logo.png";
import "./Navbar.css";

const Menu = () => (
  <>
    <Link to="/skills" className="navbar-links_link navigation-page">
      Skills
    </Link>
    <Link to="/projects" className="navbar-links_link navigation-page">
      Projects
    </Link>
    <Link to="/contacts" className="navbar-links_link cta-btn">
      Get in Touch
    </Link>
  </>
);
const onSubmit = (event) => {
  event.preventDefault(event);
};
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="home-container">
      <div className="navbar">
        <div className="navbar-links">
          <div className="navbar-links_logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="navbar-links_container">
            <Menu />
          </div>
        </div>
        <div className="navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#e1e2e2"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#e1e2e2"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar-menu_container swing-in-top-fwd">
              <div className="navbar-menu_container-links ">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="icon-links">
        <a href="https://github.com/arbieabesamis27" target="_blank">
          <RiGithubFill
            className="hover-icons"
            color="#e1e2e2"
            size={35}
            onMouseOver={({ target }) => (target.style.color = "orange")}
            onMouseOut={({ target }) => (target.style.color = "white")}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/arbie-abesamis-b21975126/"
          target="_blank"
        >
          <RiLinkedinBoxFill
            className="hover-icons"
            color="#e1e2e2"
            size={35}
            onMouseOver={({ target }) => (target.style.color = "orange")}
            onMouseOut={({ target }) => (target.style.color = "white")}
          />
        </a>
        <a href="https://www.facebook.com/arbieabesamis27" target="_blank">
          <RiFacebookBoxFill
            className="hover-icons"
            color="#e1e2e2"
            size={35}
            onMouseOver={({ target }) => (target.style.color = "orange")}
            onMouseOut={({ target }) => (target.style.color = "white")}
          />
        </a>
        <a href="https://www.instagram.com/arbie_abesamis/" target="_blank">
          <RiInstagramFill
            className="hover-icons"
            color="#e1e2e2"
            size={35}
            onMouseOver={({ target }) => (target.style.color = "orange")}
            onMouseOut={({ target }) => (target.style.color = "white")}
          />
        </a>
      </div>
      <div className="footer">
        <p>&copy; 2022 Arbie Abesamis </p>
      </div>
    </div>
  );
};

export default Navbar;
