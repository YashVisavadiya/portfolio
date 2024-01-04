import React from "react";

export const SocialLinks = () => {
  return (
    <div className="container social-container mb-4">
      <div className="link-container">
        <a href="#">
          <i class="fa-brands fa-github fs-3"></i>
        </a>
      </div>
      <div className="link-container">
        <a href="#">
          <i class="fa-brands fa-linkedin fs-3"></i>
        </a>
      </div>
      <div className="link-container">
        <a href="#">
          <i class="fa-brands fa-instagram fs-3"></i>
        </a>
      </div>
      <div className="link-container">
        <a href="#">
          <i class="fa-solid fa-code fs-4"></i>
        </a>
      </div>
    </div>
  );
};
