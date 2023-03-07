import { commonItems, uncommonItems, rareItems, epicItems, legendaryItems } from "../assets/json/items";


const newItem = {}

const rarityProbCalculator = () => {
  const rarityProb = Math.floor(Math.random() * 100)
  if (rarityProb < 3) {
    newItem['rarity'] = legendaryItems.rarity
    newItem['name'] = legendaryItems.items[Math.floor(Math.random() * legendaryItems.items.length)]
  } else if (rarityProb > 3 && rarityProb < 13) {
    newItem['rarity'] = epicItems.rarity
    newItem['name'] = epicItems.items[Math.floor(Math.random() * epicItems.items.length)]
  } else if (rarityProb > 13 && rarityProb < 28) {
    newItem['rarity'] = rareItems.rarity
    newItem['name'] = rareItems.items[Math.floor(Math.random() * rareItems.items.length)]
  } else if (rarityProb > 28 && rarityProb < 48) {
    newItem['rarity'] = uncommonItems.rarity
    newItem['name'] = uncommonItems.items[Math.floor(Math.random() * uncommonItems.items.length)]
  } else {
    newItem['rarity'] = commonItems.rarity
    newItem['name'] = commonItems.items[Math.floor(Math.random() * commonItems.items.length)]
  }
  return newItem
}

export default rarityProbCalculator;