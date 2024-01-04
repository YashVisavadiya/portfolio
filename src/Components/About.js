import React from "react";
import { Title } from "./Title";
import { TypingText } from "./TypingText";
import { SocialLinks } from "./SocialLinks";

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

        <div className="description fs-4 my-3">
          Hey there! 👋 I'm Yash, an Award-winning competitive programmer
          skilled in Python with a track record of success in online and offline
          contests. Winner of the Gateway Group hackathon in ASP.NET technology.
          Proven ability to excel in individual and team settings. Committed to
          continuous personal and professional growth, including public speaking
          and leadership development.
        </div>

        <SocialLinks />
      </div>
    </>
  );
};
