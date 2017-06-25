// input to the handler = pa value
// output = value of the single downstream promise created by that specific then call
// all of this is just like map

// array prototype map and promise prototype then are practically the same function

[1].map(double).map(inc);

Promise.resolve(1).then(double).then(inc);

// map and then both take a box
//
// apply a generic transformation function to the value(s) in the box
// and return a new box with the transformed val(s)
//
// btw these are called functors
//
// boxes with a mapper
// other examples include functional trees and functional streams
// e.g. RxJS observables
// you can imagine a tree with .map
// returns a new tree with values transformed
// same concept
// arrays are boxes of multiple values, promises are boxes of future value, trees are boxes of values with structural relationships, streams are boxes of multiple future values
// all can be dynamically transformed yielding new instances
// once you get functors, you're halfway to getting monads
