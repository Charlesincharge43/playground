// const breadthFirst = function(node){ //this solution is EASIER to write, but less performant...
// shift is a VERY BAD THING!!!
//   let queue = [node]
//   while (queue.length){
//     const currentNode = queue.shift()
//     console.log(currentNode.value)
//     queue = queue.concat(currentNode.children)
//   }
// }

const breadthFirst = function(node){// much better.. though a little more annoying to write because
  // you actually need bookkeeping now
  // now queue never gets smaller.. it keeps getting bigger, as long as there are
  // more nodes in the tree to add to it.  The looping stops when the pointer is
  // at the end of the queue
  let queue = [node]
  for (let i = 0; i < queue.length; i++){
    const currentNode = queue[i]
    console.log(currentNode.value)
    queue.push(...currentNode.children)
  }
}

const depthFirstPreOrder = function(node){
  console.log(node.value)
  for (let child of node.children){
    depthFirstPreOrder(child)
  }
}

const depthFirstPostOrder = function(node){
  console.log('on node: ', node.value)
  for (let child of node.children){
    console.log('going through ', node.value, ' children...')
    depthFirstPostOrder(child)
  }
  console.log(node.value)
}

// const depthFirstInOrder = function(topNode){// doesn't make sense.. this is only for binary searches
//
// }

const Node = function (value){
  this.value = value
  this.children = []
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')
a.children = [b, c, d]
b.children = [e]

breadthFirst(a)
depthFirstPreOrder(a)
console.log('ON POST ORDER THINGY')
depthFirstPostOrder(a)
