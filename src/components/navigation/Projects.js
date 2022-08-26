import React, { useState } from "react";
import project1 from "../../assets/projects/calculator.png";
import project2 from "../../assets/projects/firstwebsite.png";
import project3 from "../../assets/projects/todo.png";
import project4 from "../../assets/projects/project2.png";
import "./Projects.css";

const Projects = () => {
  const [hiddenPopupMenu, setHiddenPopupMenu] = useState(true);
  const hover = () => {
    setHiddenPopupMenu({ hiddenPopupMenu: !hiddenPopupMenu });
  };
  return (
    <div className="main-container">
      <div className="projects-container">
        <div className="project-container">
          <div className="image-container">
            <img src={project1} alt="proj" />
            <div className="project-info" onMouseOver={hover}>
              <h3>Calculator App</h3>
              <div className="tools">
                <span>html</span>
                <span>css</span>
                <span>javascript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://arbieabesamis27.github.io/Kodego-Activity-SimpleCalculator/"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/arbieabesamis27/Kodego-Activity-SimpleCalculator"
                  target="_blank"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="image-container">
            <img src={project3} alt="proj" />
            <div className="project-info">
              <h3>Tod Do App</h3>
              <div className="tools">
                <span>html</span>
                <span>css</span>
                <span>react js</span>
                <span>material ui</span>
              </div>
              <div className="project-links">
                <a
                  href="https://kodego-activity-to-do-list-m4motes1x-arbieabesamis27.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/arbieabesamis27/Kodego-Activity-ToDoList"
                  target="_blank"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="image-container">
            <img src={project2} alt="proj" />
            <div className="project-info">
              <h3>5 Pages Website</h3>
              <div className="tools">
                <span>html</span>
                <span>css</span>
                <span>javascript</span>
              </div>
              <div className="project-links">
                <a href="https://arbieabesamis27.github.io/" target="_blank">
                  Live Demo
                </a>
                <a
                  href="https://github.com/arbieabesamis27/arbieabesamis27.github.io"
                  target="_blank"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="image-container">
            <img src={project4} alt="proj" />
            <div className="project-info">
              <h3>React Website</h3>
              <div className="tools">
                <span>html</span>
                <span>css</span>
                <span>react js</span>
                <span>email js</span>
                <span>router</span>
              </div>
              <div className="project-links">
                <a
                  href="https://kodego-group-project-2-2msg72cy9-arbieabesamis27.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/arbieabesamis27/arbieabesamis27.github.io"
                  target="_blank"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
