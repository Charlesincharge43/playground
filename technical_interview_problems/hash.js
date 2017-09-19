
class LinkedList { // technically an association list because key and value
  // but whatever
  constructor(headNode){
    this.head = headNode
  }
  getNode(key){
    let currentNode = this.head
    while (currentNode){
      if (currentNode.key === key){
        return currentNode
      }
      currentNode = currentNode.next
    }
  }
  upSert(key, value){
    const gotNode = this.getNode(key)
    if (gotNode){
      gotNode.value = value // updated
    } else {
      this.addNode(key, value) // added
    }
  }
  getVal(key){
    return this.getNode(key).value
  }
  upVal(key, value){
    this.getNode(key).value = value
  }
  addNode(key, value){
    const nodeToAdd = new Node(key, value)
    nodeToAdd.next = this.head
    this.head = nodeToAdd
  }
}

class Node {
  constructor(key, value){
    this.key = key
    this.value = value
  }
}

function hash (key) {
  let hashedKey = 0;
  for (var i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % 20;
}

class HashTable {
  constructor(){
    this.buckets = new Array(20)
  }
  set (key, value){
    const idx = hash(key)
    if (!this.buckets[idx]){
      this.buckets[idx] = new LinkedList(new Node(key, value))
    } else {
      this.buckets[idx].upSert(key, value)
    }
    return this
  }
  get (key){
    const idx = hash(key)
    return this.buckets[idx].getVal(key)
  }
}
