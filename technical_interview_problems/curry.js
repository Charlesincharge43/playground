function curry(func){
  const neededArgsLength = func.length
  return function whatToDo(...args){
    const argsSoFar = args
    if (argsSoFar.length === neededArgsLength){
      return func(...argsSoFar)
    } else {
      return function addToMemory(...args){
        const newArgs = argsSoFar.concat(args)
        return whatToDo(...newArgs)
      }
    }
  }
}

 // whatToDo does 2 things:
 // 1 - keeps track of arguments provided so far (if you imagine all the different possible arguments and partial arguments as like a tree, then each whatToDo stack holds the memory of the arguments at each "node" )
 // 2 - determines whether to return the original function invoked (if total required args met), or return another function, addToMemory

 // addToMemory:
 // takes in additional arguments, adds that to the original arguments in memory (from the function whatToDo via closure) to form a new set of updated arguments, and passes it into a new whatToDo for its own memory of arguments (which would subsequently decide to return its own addToMemory again or invoke the original function with all arguments)

function doMath (var1, var2, var3, var4) {
  return var1 + var2 - var3 * var4;
}
const curriedDoSomething = curry(doMath); // closure memory -> []
const firstReturn = curriedDoSomething(1); // closure memory -> [1] // same as curry(doMath)(1)
const secondReturn = firstReturn(2); // closure memory -> [1, 2] // same as curry(doMath)(1)(2), or curry(doMath)(1, 2) etc...
const thirdReturn = secondReturn(3); // closure memory -> [1, 2, 3]
const fourthReturn = thirdReturn(4); // 9 (1 + 2 - 3 * 4)
const fourthReturn2 = thirdReturn(10); // you can BRANCH with currying

console.log(fourthReturn, fourthReturn2, curry(doMath)(1, 2, 3, 4), curry(doMath)(1, 2, 3, 10))
// should log out -9, -27, -9, -27
