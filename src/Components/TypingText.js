import React from "react";
import { INTEREST_LIST } from "../Contents/Information";

export const TypingText = () => {
  const DELAY_IN_TYPING_CHAR = 100;
  const DELAY_IN_TYPING_TEXT = 1000;

  let text_index = 0;
  let char_index = 0;

  const TypeText = () => {
    let type_text = document.getElementById("type-text");

    if (char_index < INTEREST_LIST[text_index].length) {
      type_text.textContent += INTEREST_LIST[text_index].charAt(char_index);
      char_index++;
      setTimeout(TypeText, DELAY_IN_TYPING_CHAR);
    } else {
      setTimeout(EraseText, DELAY_IN_TYPING_TEXT);
    }
  };

  const EraseText = () => {
    let type_text = document.getElementById("type-text");

    if (char_index >= 0) {
      type_text.textContent = INTEREST_LIST[text_index].substring(
        0,
        char_index - 1
      );
      char_index--;
      setTimeout(EraseText, DELAY_IN_TYPING_CHAR);
    } else {
      text_index++;
      if (text_index >= INTEREST_LIST.length) text_index = 0;
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
