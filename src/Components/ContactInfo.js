import React from "react";
import { SocialLinks } from "./SocialLinks";

export const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <p className="contact-info-title fs-4 fw-bold ">
          Let's Talk About Innovations!
        </p>
        <p>
          Don't like Forms? Send me an <a href="mailto:">Email</a>. 👋
        </p>
        <p className="fs-5 fw-bolder mb-4">Or Find me on:</p>
        <SocialLinks />
        <p className="d-flex flex-row align-items-center">
          <i class="fa-regular fa-envelope fs-5"></i>
          <span> &nbsp; yash.visavadia.work@gmail.com</span>
        </p>
        <p className="d-flex flex-row align-items-center">
          <i class="fa-solid fa-phone fs-5"></i>
          <span> &nbsp; +91 99793 23941</span>
        </p>
        <p className="d-flex flex-row align-items-center">
          <i class="fa-solid fa-location-dot fs-5"></i>
          <span> &nbsp;&nbsp; Rajkot, Gujarat, India</span>
        </p>
      </div>
    </>
  );
};
