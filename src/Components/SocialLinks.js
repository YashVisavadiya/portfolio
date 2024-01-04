import React from "react";

export const SocialLinks = () => {
  return (
    <div className="container social-container mb-4">
      <div className="link-container pb-1">
        <a href="#">
          <i class="fa-brands fa-github fs-3"></i>
        </a>
      </div>
      <div className="link-container pb-1">
        <a href="#">
          <i class="fa-brands fa-linkedin fs-3"></i>
        </a>
      </div>
      <div className="link-container pb-1">
        <a href="#">
          <i class="fa-brands fa-instagram fs-3"></i>
        </a>
      </div>
      <div className="link-container pb-1">
        <a href="#">
          <i class="fa-solid fa-code fs-3"></i>
        </a>
      </div>
    </div>
  );
};
