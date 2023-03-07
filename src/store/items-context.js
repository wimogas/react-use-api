import React, { createContext, useContext, useEffect, useState } from "react";

import { useApi } from "../hooks";
import { rarityProbCalculator } from "../helpers";

import UIContext from "./ui-context";

const ItemsContext = createContext({
  items: [],
  loadingItems: false,
  fetchAllItems: () => {},
  rollSingleItem: () => {},
  deleteSingleItem: (id) => {},
  updateSingleItem: (id) => {}
});

export const ItemsContextProvider = (props) => {

  const UICtx = useContext(UIContext)

  const [userItems, setUserItems] = useState([])
  const [loadingItems, setLoadingItems] = useState(false)

  const handleFetchAllItems = async () => {
    setLoadingItems(true)
    const url = `${process.env.FIREBASE_DB_URL}itemlist.json`;
    const method = 'GET';
    const data = await useApi(url, method)
    const loadedItems = [];

    for (const key in data) {
      loadedItems.push({
        id: key,
        rarity: data[key]['rarity'],
        name: data[key]['name']
      })
    }
    setUserItems(loadedItems)
    setLoadingItems(false)
  }

  const handleRollSingleItem = async () => {
    const newItem = rarityProbCalculator()
    const url = `${process.env.FIREBASE_DB_URL}itemlist.json`;
    const method = 'POST';
    const body = newItem;
    const data = await useApi(url, method, body)
    const newAddedItem = {
      id: data.name,
      rarity: newItem['rarity'],
      name: newItem['name']
    }
    setUserItems((prevItems) => [...prevItems, newAddedItem])
    UICtx.pushAlert("Item added successfully", "success", "toast")
  }

  const handleDeleteSingleItem = async (id) => {
    const url = `${process.env.FIREBASE_DB_URL}itemlist/${id}.json`;
    const method = 'DELETE';
    const data = await useApi(url, method)
    const newItemList = userItems.filter(item => item.id !== id)
    setUserItems(newItemList)
    UICtx.pushAlert("Item deleted successfully", "success", "toast")
  }

  const handleUpdateSingleItem = async (id) => {
    const randProbToUpgrade = Math.floor(Math.random() * 100)
    const chanceToUpgrade = randProbToUpgrade > 60;
    if (!chanceToUpgrade) {
      const url = `${process.env.FIREBASE_DB_URL}itemlist/${id}/rarity.json`;
      const method = 'PUT';
      const foundItem = userItems.filter(item => item.id === id)
      const rarities = ["common", "uncommon", "rare", "epic", "legendary"]
      const foundIndex = rarities.findIndex(i => i === foundItem[0].rarity)
      if (foundIndex < rarities.length - 1) {
        foundItem[0].rarity = rarities[foundIndex + 1]
      } else {
        UICtx.pushAlert("Item already at max Rarity", "error", "toast")
        return
      }
      const data = await useApi(url, method, foundItem[0].rarity)
      const newUserItems = userItems.map(item => {
        if (item.id === id) {
          item.rarity = foundItem[0].rarity
          return item
        } else {
          return item
        }
      })
      setUserItems(newUserItems)
      UICtx.pushAlert("Item upgraded successfully", "success", "toast")
    } else {
      UICtx.pushAlert("Upgrade was unsuccessful", "error", "toast")
      return
    }
  }

  const context = {
    items: userItems,
    loadingItems,
    fetchAllItems: handleFetchAllItems,
    rollSingleItem: handleRollSingleItem,
    deleteSingleItem: handleDeleteSingleItem,
    updateSingleItem: handleUpdateSingleItem
  };

  return (
    <ItemsContext.Provider value={context}>
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;
