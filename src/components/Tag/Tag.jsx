import React from "react";
import "./tag.css";

const Tag = (props) => {
  return (
    <>
      <div id="tag-text" class={props.type}>
        {props.type}
      </div>
    </>
  );
};

export default Tag;
