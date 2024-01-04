import React from "react";
import PropTypes from "prop-types";

export const ProjectCard = (props) => {
  return (
    <>
      <div className="project-card p-3">
        <div className="project-img mb-3">
          <img src={require(`./../Assets/Projects/${props.img}`)} alt="" />
        </div>
        <div className="project-title">
          <p>{props.name}</p>
        </div>
        <div className="project-description px-3">
          <p>{props.description}</p>
        </div>
        <div className="project-links">
          <a href={`${props.sourceCode}`}>
            <i class="fa-brands fa-github fs-3"></i>
          </a>
          <a href={`${props.preview}`}>
            <i class="fa-solid fa-share-from-square fs-4"></i>
          </a>
        </div>
      </div>
    </>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  stack: PropTypes.array,
  sourceCode: PropTypes.string,
  img: PropTypes.string,
  preview: PropTypes.string,
};
