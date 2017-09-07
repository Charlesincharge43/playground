/*

Couple rules:
- write async before the "function"
  - await (immediate???) closure must be an async function... even if an "outer" closure
  is ultimately an async function.  must be immediate closure! (may not seem hard
  to mess up, but with cb's it's easy to forget!)
- await must be before a promise or any object that is "thenable"!

How it works:

await somePromise ... that returns a *value* in the async function (the value is the resolved
value of the somePromise), which you can do synchronous operations with!

(the synchronous code after the await will not run until the awaited promise is resolved)

console.log(await p)

let a = await p
console.log(a)

both the above acceptable!

The async function itself, however, returns a promise!  (resolved value of this promise
is whatever the async function returns in the block)

Some suggestions:

Either use promises the traditional way (where you then off it), or use all async awaits!
Don't do both.. commit to one and keep it consistent!

*/

/*

Say we want to console.log something after 1 second.  How would we do it?

*/
