import React from "react";

export const TypingText = () => {
  const text = [
    "A Tech Enthusiast",
    "A Gamer",
    "An AI & ML Enthusiast",
    "A Web Developer",
    "A Competetive Programmer",
  ];

  const DELAY_IN_TYPING_CHAR = 100;
  const DELAY_IN_TYPING_TEXT = 1000;

  let text_index = 0;
  let char_index = 0;

  const TypeText = () => {
    let type_text = document.getElementById("type-text");

    if (char_index < text[text_index].length) {
      type_text.textContent += text[text_index].charAt(char_index);
      char_index++;
      setTimeout(TypeText, DELAY_IN_TYPING_CHAR);
    } else {
      setTimeout(EraseText, DELAY_IN_TYPING_TEXT);
    }
  };

  const EraseText = () => {
    let type_text = document.getElementById("type-text");

    if (char_index >= 0) {
      type_text.textContent = text[text_index].substring(0, char_index - 1);
      char_index--;
      setTimeout(EraseText, DELAY_IN_TYPING_CHAR);
    } else {
      text_index++;
      if (text_index >= text.length) text_index = 0;
      setTimeout(TypeText, DELAY_IN_TYPING_TEXT);
    }
  };

  window.onload = () => {
    setTimeout(TypeText, DELAY_IN_TYPING_TEXT);
  };

  return (
    <div className="dynamic-text">
      <span id="type-text"></span>
      <span className="cursor">&nbsp;</span>
    </div>
  );
};
