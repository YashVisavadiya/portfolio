import React from "react";
import { Title } from "./Title";
import { PROJECTS } from "../Contents/Information";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <>
      <Title First={`<My`} Second={`Projects/>`} />
      <div className="container-fluid project-container my-5 ">
        {PROJECTS.map((project, index) => {
          return (
            <div key={index}>
              <ProjectCard
                name={project.name}
                description={project.description}
                stack={project.stack}
                sourceCode={project.sourceCode}
                img={project.img}
                preview={project.preview}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
