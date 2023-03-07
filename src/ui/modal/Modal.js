import React, { useContext } from "react";

import CloseFill from '../../assets/icons/close-fill.svg?raw'

import UIContext from "../../store/ui-context";

import Block from "../block/Block";
import Button from "../button/Button";
import Icon from "../icon/Icon";

import styles from './Modal.module.css'

const Modal = ({children, close, title}) => {

  const uiCtx = useContext(UIContext)

  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal']}>
        <Block 
          variant={'card'} 
          direction={'column'}
          minWidth={'50vw'}
          gap={24}
        >
          <div className={styles['modal-header']}>
            <h1 className={styles.title}>{title}</h1>
            <Button variant={'secondary'} action={close}>
              <Icon fill={uiCtx.colors['secondary']}><CloseFill/></Icon>
            </Button>
          </div>
          <div className={styles['modal-body']}>
            {children}
          </div>
        </Block>
      </div>
    </div>

    
  );
};

export default Modal;
