class ImmutableBST{
  constructor(val){
    this.val = val
    this.left = null
    this.right = null
  }
  insert(val){

  }

}

const bstA = new ImmutableBST(5);
const bstB = bstA.insert(6);
console.log(bstA); // contains only 5, NOT 6
console.log(bstB); // contains 5 and 6

const bst = new ImmutableBST(5);
const bstMore = bst.insert(4).insert(3).insert(1).insert(10).insert(11).insert(15).insert(2).insert(100);
bstMore.contains(5); // true
bstMore.contains(3); // true
bstMore.contains(11); // true
bstMore.contains(12); // false
console.log(bst === bstMore); // false, because of immutability
