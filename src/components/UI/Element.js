import React from "react";
import classes from "./Element.module.css";

const Element = (props) => {
  return <div className={`${classes.element} ${props.className}`}>{props.children}</div>;
};

export default Element;
