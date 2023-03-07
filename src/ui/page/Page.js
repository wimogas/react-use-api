import React from "react";

import Block from "../block/Block";

import styles from './Page.module.css'

const Page = (props) => {

  return (
    <Block 
      direction={'column'} 
      gap={34} 
      paddingX={'34'}
      paddingY={'40'}
    >
      <Block align={'center'} justify={'space-between'}>
        <div className={styles.title}>{props.title}</div>
        {props.action}
      </Block>
      {props.children}
    </Block>
  );
};

export default Page;
