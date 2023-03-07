import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {

  return (
    <button 
      className={`${styles.button} ${props.variant && styles[props.variant]}`} 
      onClick={() => props.action && props.action()}
      style={props.style}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
