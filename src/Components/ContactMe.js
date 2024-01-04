import React from "react";
import { Title } from "./Title";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export const ContactMe = () => {
  return (
    <>
      <Title First={"<Contact"} Second={"Me/>"} />
      <div className="container contact-container my-5">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
};
