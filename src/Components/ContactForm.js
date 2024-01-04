import React from "react";

export const ContactForm = () => {
  return (
    <>
      <div className="contact-form">
        <form action="">
          <input
            type="text"
            name="name"
            className="mb-4"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            name="email"
            className="mb-4"
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="subject"
            className="mb-4"
            placeholder="Subject"
            required
          />
          <textarea placeholder="Message" className="mb-4" required />
          <input type="button" value="Send" className="contact-btn" />
        </form>
      </div>
    </>
  );
};
