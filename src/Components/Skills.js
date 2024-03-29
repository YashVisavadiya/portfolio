import React from "react";
import { Title } from "./Title";
import { SKILLS } from "./../Contents/Information";

const Skills = () => {
  return (
    <section id="Skills">
      <Title First={"<Skills"} Second={"&Tools/>"} />
      <div className="container skills-container">
        {SKILLS.map((skill, index) => {
          return (
            <div className="skill-img" key={index}>
              <img src={require(`./../Assets/Skills/${skill}`)} alt="..." />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
