// practicing jquery to help with identifying certain possibilities in the Binding of Isaac game!
//
// for getting number of items in the treasure pool from here:
//https://bindingofisaacrebirth.gamepedia.com/Treasure_Room_(Afterbirth%2B_Item_Pool)

// $('#bodyContent').find('table.passive-collectible').first().children('tbody').first().children() // 250 items
// $('#bodyContent').find('table.active-collectible').first().children('tbody').first().children() // 76 items

function getChance(itemsInRoom, itemsEliminated, rerollsAvailable){
  const totalItems = 326
  const remainingItems = totalItems - itemsEliminated
  const singleChance = itemsInRoom / remainingItems
  const missChance = 1 - singleChance
  return 1 - Math.pow(missChance, rerollsAvailable)
}

getChance(2, 20, 10) // if 5 items elimiated, 2 items in the item pool (got more options!) ... and with D6 and 10 batteries available..
// the odds of getting the one item you want is still only 6.3% :(
// no WONDER it's so tough
