import React, { useContext, useState } from "react";

import PencilLine from '../../assets/icons/pencil-line.svg?raw'

import UIContext from "../../store/ui-context";

import Icon from '../icon/Icon';

import styles from './Text.module.css'

const Text = ({type, text, color, editable}) => {

  const uiCtx = useContext(UIContext)

  const [hovered, setHovered] = useState(false)

  const Type = type || 'span';

  const handleHover = () => {
    setHovered(!hovered)
  }

  return (
    <Type 
      className={styles.text} 
      style={{color: uiCtx.colors[color]}} 
      onMouseEnter={handleHover} 
      onMouseLeave={handleHover}
    >
      {text}
      {editable && hovered && <Icon fill={uiCtx.colors[color]}><PencilLine/></Icon>}
    </Type>
  );
};

export default Text;
