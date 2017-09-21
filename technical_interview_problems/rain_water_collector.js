// next up.. you need to figure out how to do this in O(n) time (which is SOMEHOW possible???)

function totalVol(terrainArr){
  let currentHeight = Math.max(...terrainArr)
  let totVol = 0
  while (currentHeight >= 0){
    const sliceArr = makeSliceArr(currentHeight, terrainArr)
    totVol += sliceVol(sliceArr)
    currentHeight--
  }
  return totVol
}

function makeSliceArr(height, terrainArr){ //makes a sliceArr that represents terrain at a given height
  // e.g., [0,1,0,0,2,1] at height 2 should give you [0,0,0,0,1,0], at height 1 should give you [0,1,0,0,1,1]
  return terrainArr.map(el => {
    if (height - el <= 0){
      return 1
    }
    return 0
  })
}

function sliceVol(sliceArr){ //volume of water at each horizontal "slice" // sliceArr looks like [1,0,0,1,0,1,0] (vol should be 3)
  let vol = 0
  let incrementVol = false
  for (let i of sliceArr){ // get initial vol, determined by all 0's after the first 1 is encountered
    if (i){
      incrementVol = true
    }
    if (!i && incrementVol){
      vol++
    }
  }
  for (let i = sliceArr.length - 1; i >= 0; i--){ // go backwards from the last element, and subtract volume for 0's at the end that are not between 1's
    if (!sliceArr[i]){
      vol--
    } else {
      break
    }
  }
  return vol
}

// vol = 7
const a = [0,0,1,2,4,3,2,5,0,0,2,1];
console.log('collection device "a" can hold', totalVol(a));

// vol = 6
const b = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log('collection device "b" can hold', totalVol(b));

// vol = 12
const c =[0,3,0,1,0,0,0,1,0,2];
console.log('collection device "c" can hold', totalVol(c));

// vol = 8
const d = [0,1,0,3,5,0,0,0,2,0,1];
console.log('collection device "d" can hold', totalVol(d));

// vol = 38
const e = [0,5,3,2,8,8,1,1,2,4,3,3,7,1,2,4,3,2];
console.log('collection device "e" can hold', totalVol(e));
