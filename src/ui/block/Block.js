import React from "react";

import styles from "./Block.module.css";

const Block = (props) => {

  const padding = 
    props.paddingX && props.paddingY ? 
    props.paddingX + 'px ' + props.paddingY + 'px'
    : props.padding + 'px'
  return (
    <div className={
      props.variant ? styles.block + ' ' + styles[props.variant]
      : styles.block}
      style={{
        flexDirection: props.direction,
        justifyContent: props.justify,
        alignItems: props.align,
        gap: props.gap + 'px', 
        flexWrap: props.wrap ? 'wrap' : 'no-wrap',
        maxWidth: props.maxWidth,
        minWidth: props.minWidth,
        minHeight: props.minHeight,
        padding,
        width: props.width
      }}>
      {props.children}
    </div>
  );
};

export default Block;
