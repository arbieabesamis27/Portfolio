import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import profile from "../../assets/profile-image.png";

const Home = () => {
  return (
    <div className="home-page_container">
      <div className="home-page_container-text">
        <h3>Hello,</h3>
        <h1>I'm Arbie Abesamis</h1>
        <h2>Full Stack Web Developer</h2>
        <Link to="/contacts" className="cta-btn">
          Get in Touch
        </Link>
      </div>
      <div className="home-page_container-image">
        <img src={profile} />
      </div>
    </div>
  );
};

export default Home;
