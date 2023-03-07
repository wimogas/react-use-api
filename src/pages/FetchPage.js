import React, { useContext, useEffect, useState } from "react";

import Button from "../ui/button/Button";
import Block from "../ui/block/Block";

import Page from "../ui/page/Page";

import styles from './FetchPage.module.css'

import ItemsContext from "../store/items-context";

const ItemListPage = () => {

  const ITEMCtx = useContext(ItemsContext)

  useEffect(() => {
    ITEMCtx.fetchAllItems()
  }, [])


  return (
    <Page title={<h1>useApi</h1>}>
      <Block direction={'column'} gap={32}>
        <Button variant={'primary'} action={ITEMCtx.rollSingleItem}>Get Reward</Button>
        {ITEMCtx.loadingItems && ITEMCtx.items.length === 0 ? <p>Loading...</p> : 
        ITEMCtx.items.length > 0 ? <ul>
          {ITEMCtx.items.map(item => <li key={item.id} style={{listStyleType: "none", marginBottom: "12px"}}>
              <Block align="center" gap={12}>
                <Button variant={"secondary"} action={() => ITEMCtx.deleteSingleItem(item.id)}>Discard</Button>
                <Button variant={"primary"} action={() => ITEMCtx.updateSingleItem(item.id)} disabled={item.rarity === "legendary"}>Upgrade</Button>
                <span className={`${styles.item} ${styles[item.rarity]}`}>
                  <span className={styles['item-name']}>{item.name}</span> <em>({item.rarity})</em>
                </span>
              </Block>
            </li>).reverse()}
        </ul> : <p>No items</p>
        }
      </Block>
    </Page>
  );
};

export default ItemListPage;
