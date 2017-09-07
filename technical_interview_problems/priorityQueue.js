class Node {
  constructor(data, priority){
    this.data = data
    this.priority = priority
    this.next = null
  }
}

class PriorityQueue {
  constructor(){
    this.head = null
  }
  // // MORE INTUITIVE WAY (BUT LESS CONCISE)
  // insert(data, priority){
  //   const newNode = new Node(data, priority)
  //   if (!this.head){
  //     this.head = newNode
  //   } else {
  //     let currentNode = this.head
  //     let prevNode = null
  //     while (currentNode){
  //       if (newNode.priority > currentNode.priority){
  //         this.place(newNode, currentNode, prevNode)
  //         break
  //       }
  //       prevNode = currentNode
  //       currentNode = currentNode.next
  //     }
  //     this.place(newNode, null, prevNode)
  //   }
  // }
  // place(newNode, nextNode, prevNode){
  //   if (nextNode){
  //     newNode.next = nextNode
  //   }
  //   if (prevNode){
  //     prevNode.next = newNode
  //   } else {
  //     this.head = newNode
  //   }
  // }
  //
  // // MORE INTUITIVE WAY AND LESS MODULAR
  // insert(data, priority){
  //   const newNode = new Node(data, priority)
  //   if (!this.head){
  //     this.head = newNode
  //   } else {
  //     let currentNode = this.head
  //     let prevNode = null
  //     while (currentNode){
  //       if (newNode.priority > currentNode.priority){
  //         newNode.next = currentNode
  //         if (prevNode){
  //           prevNode.next = newNode
  //         } else {
  //           this.head = newNode
  //         }
  //         break
  //       }
  //       prevNode = currentNode
  //       currentNode = currentNode.next
  //     }
  //     prevNode.next = newNode
  //   }
  // }
  //
  // LESS INTUITIVE BUT MORE CONCISE!  LOOK AHEAD AT NEXT NODE'S PRIORITY AT EACH
  // ITERATION OF THE WHILE LOOP
  insert(data, priority){
    const newNode = new Node(data, priority)
    if (!this.head || newNode.priority > this.head.priority){
      const oldHead = this.head
      this.head = newNode
      newNode.next = oldHead
    } else {
      let currentNode = this.head
      while (currentNode.next){ // see note at bottom
        if (newNode.priority > currentNode.next.priority){
          newNode.next = currentNode.next
          currentNode.next = newNode
          break
        }
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
  }
// note you can make insert even simpler by using the while loop to simply
// move the pointer... and add the priority logic into the while conditional
// this would obviate the need to put a break line... and means you don't need
// to add additional code after the while loop (for when current.next is null)
// i.e.,  currentNode.next = newNode, which is also repeated
// Remember that line 80 and 81 can both work for the newNode.priority > currentNode.next.priority
// AND the !currentNode.next cases!!!!! (line 80 won't break even if currentNode.next is null)

// example below:
// var pointer = this.first;
// while (pointer.next && pointer.next.priority >= priority) {
//     pointer = pointer.next;
// }
// var newItem = new Node(data, priority);
// newItem.next = pointer.next;
// pointer.next = newItem;

  peek(){
    return this.head
  }
  popMax(){
    const oldHead = this.head
    this.head = this.head.next
    return oldHead
  }
}



const pq = new PriorityQueue();
pq.insert('Jill, concussion', 7);
pq.insert('John, stomach pain', 5);
pq.peek() // ==> 'Jill, concussion'
pq.peek() // ==> 'Jill, concussion'  // Jill is still in the PQ
pq.insert('Dave, sprained ankle', 1);
pq.insert('Bob, breathing problems', 8)
pq.peek() // ==> 'Bob, breathing problems'
pq.popMax() // ==> 'Bob, breathing problems'
pq.peek() // ==> 'Jill, concussion' // Bob has been removed from the PQ
