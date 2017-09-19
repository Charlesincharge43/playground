// const decimalToBinary = function (dec){
//   const onesIndices = getOnes(dec)
//   return makeBin(onesIndices)
// }
//
// const getOnes = function(dec){
//   const indices = [] // represents the ones
//   let remaining = dec
//   while (remaining){
//     let pow = 0
//     let sw = true
//     let previousPowered = null
//     while (sw){
//       const powered = Math.pow(2, pow)
//       if (powered > remaining){
//         indices.push(pow - 1)
//         remaining -= previousPowered
//         sw = false
//       }
//       pow++
//       previousPowered = powered
//     }
//   }
//   return indices
// }
//
// const makeBin = function(indices){
//   let bin = ''
//   let counter = 0
//   let idx = indices.length - 1
//   while (idx >= 0){
//     const currentEl = indices[idx]
//     if (counter === currentEl){
//       bin = '1' + bin
//       idx--
//     } else {
//       bin = '0' + bin
//     }
//     counter++
//   }
//   return bin
// }

// *** this is the best way for if you don't know about the algorithm for getting
// the binary
// const decimalToBinary = function (dec){
//   let bin = ''
//   let previousPowered = null
//   let remaining = dec
//   let pow = 0
//   while (remaining === dec){
//     const powered = Math.pow(2, pow)
//     if (powered > remaining){
//       pow -= 2
//       remaining -= previousPowered
//       bin = '1'
//     } else {
//       pow++
//       previousPowered = powered
//     }
//   }
//   while (pow >= 0){
//     const powered = Math.pow(2, pow)
//     if (powered <= remaining){
//       remaining -= powered
//       bin = bin + '1'
//     } else {
//       bin = bin + '0'
//     }
//     pow--
//   }
//   return bin
// }

const decimalToBinary = function (dec){
  let bin = ''
  let quotient = dec
  while (quotient){
    bin = (quotient % 2 ? '1' : '0') + bin
    quotient = Math.floor(quotient / 2)
  }
  return bin
}

const binaryToDecimal = function (bin){
  let pow = 0
  let total = 0
  for (let i = bin.length - 1; i >= 0; i--){
    if (bin[i] === '1'){
      total += Math.pow(2, pow)
    }
    pow++
  }
  return total
}

const r1 = decimalToBinary(4); // should return '100'
const r2 = decimalToBinary(67); // should return '1000011'

const r3 = binaryToDecimal('100'); // should return 4
const r4 = binaryToDecimal('1000011'); // should return 67
console.log(r1, r2, r3, r4)
