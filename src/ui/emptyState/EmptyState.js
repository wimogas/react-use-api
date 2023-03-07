import React, { useContext } from "react";

import GhostLine from '../../assets/icons/ghost-line.svg?raw'
import UIContext from "../../store/ui-context";

import Block from "../block/Block";
import Icon from '../icon/Icon';

const EmptyState = (props) => {

  const uiCtx = useContext(UIContext)

  return (
    <Block 
      variant={'empty'} 
      direction={'column'} 
      gap={24} 
      align={'center'}
    >
      <Icon size={64} fill={uiCtx.colors['secondary']}><GhostLine/></Icon>
      {props.content}
      {props.action && props.action}
    </Block>
  );
};

export default EmptyState;
