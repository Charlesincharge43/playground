
const spyOn = function(func){
  let count = 0
  // since there's no need to keep track of order for this particular problem
  // it's better to save arguments and returns in hashtables, that way there
  // there is no need to do indexOf
  let allArgs = {}
  let returns = {}
  const modifiedFunc = function(...args){
    count++
    args.forEach(arg => {
      allArgs[arg] = true
    })
    const returnVal = func(...args)
    returns[returnVal] = true
    return returnVal
  }
  modifiedFunc.getCallCount = function(){
    return count
  }
  modifiedFunc.wasCalledWith = function(arg){
    return allArgs[arg] || false
  }
  modifiedFunc.returned = function(val){
    return returns[val] || false
  }
  return modifiedFunc
}

const adder = function(n1, n2) { return n1 + n2; }
const adderSpy = spyOn( adder );

const r1 = adderSpy.getCallCount(); // 0

adderSpy(2, 4); // returns 6
const r2 = adderSpy.getCallCount(); // 1

adderSpy(3, 5); // returns 8
const r3 = adderSpy.getCallCount(); // 2
const r4 = adderSpy.wasCalledWith(2); // true
const r5 = adderSpy.wasCalledWith(0); // false
const r6 = adderSpy.returned(6); // true
const r7 = adderSpy.returned(9); // false
console.log(r1, r2, r3, r4, r5, r6, r7)
