import React from "react";
import { Title } from "./Title";
import { TypingText } from "./TypingText";
import { SocialLinks } from "./SocialLinks";
import { DESCRIPTION } from "../Contents/Information";

export const About = () => {
  return (
    <>
      <div className="container-fluid about-container mb-3">
        <div className="img-container mt-2 mb-3">
          <img
            src={
              "https://pics.craiyon.com/2023-10-30/66ff0c95358e458c859ecea5d3764b32.webp"
            }
            alt="..."
          />
        </div>

        <Title First="<Who" Second="AmI?/>" />

        <div className="title text-decoration-none">I am</div>

        <TypingText />

        <div className="description fs-4 my-3">{DESCRIPTION}</div>

        <p className="text-center fs-5">Find me on</p>
        <SocialLinks />
      </div>
    </>
  );
};
