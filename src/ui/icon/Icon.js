import React from "react";

const Icon = (props) => {
  const size = props.size || '20px';
  const fill = props.fill || 'black';

  return (
    <div style={{ width: size, height: size, fill }}>
      {props.children}
    </div>
  );
};

export default Icon;
