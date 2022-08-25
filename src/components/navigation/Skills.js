import React from "react";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
import bootstrap from "../../assets/icons/bootstrap.png";
import js from "../../assets/icons/js.png";
import node from "../../assets/icons/node.png";
import react from "../../assets/icons/react.png";
import github from "../../assets/icons/github.png";
import sass from "../../assets/icons/sass.png";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="html center">
        <img src={html} />
        <h5>HTML 5</h5>
      </div>
      <div className="css center">
        <img src={css} />
        <h5>CSS 3</h5>
      </div>
      <div className="javascript center">
        <img src={js} />
        <h5>Javacript</h5>
      </div>
      <div className="react center">
        <img src={react} />
        <h5>React JS</h5>
      </div>
      <div className="sass center">
        <img src={sass} />
        <h5>Sass</h5>
      </div>
      <div className="bootstrap center">
        <img src={bootstrap} />
        <h5>Bootstrap</h5>
      </div>
      <div className="node center">
        <img src={node} />
        <h5>Node JS</h5>
      </div>
      <div className="github center">
        <img src={github} />
        <h5>Github</h5>
      </div>
    </div>
  );
};

export default Skills;
