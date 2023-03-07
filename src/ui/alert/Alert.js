import React, { useContext } from "react";

import CheckboxCircleLine from '../../assets/icons/checkbox-circle-line.svg?raw'
import CloseCircleLine from '../../assets/icons/close-circle-line.svg?raw'
import CloseFill from '../../assets/icons/close-fill.svg?raw'

import UIContext from "../../store/ui-context";

import Button from "../button/Button";
import Block from "../block/Block";
import Icon from "../icon/Icon";

import styles from "./Alert.module.css";

const Alert = ({message, variant, type, close}) => {

  const uiCtx = useContext(UIContext)

  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      <Block align={'center'} gap={12}>
        {variant === 'success' ? <Icon fill={uiCtx.colors['success']}><CheckboxCircleLine/></Icon> :
        <Icon fill={uiCtx.colors['error']}><CloseCircleLine/></Icon>}
        {message}
      </Block>
      <Button variant={'tertiary'} action={close}>
        <Icon fill={uiCtx.colors['secondary']}><CloseFill/></Icon>
      </Button>
    </div>
  );
};

export default Alert;
