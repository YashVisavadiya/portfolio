import React from "react";
import { Title } from "./Title";
import { skills } from "./../Contents/Information";

const Skills = () => {
  return (
    <>
      <Title First={"<Skills"} Second={"&Tools/>"} />
      <div className="container skills-container">
        {skills.map((skill, index) => {
          return (
            <div className="skill-img" key={index}>
              <img src={require(`./../Assets/Skills/${skill}`)} alt="..." />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
