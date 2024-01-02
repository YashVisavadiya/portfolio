import React from "react";

export const Title = (props) => {
  return (
    <div className="title">
      <div className="title-first">{props.First}</div>
      <div className="title-second">{props.Second}</div>
    </div>
  );
};
