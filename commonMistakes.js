// Common mistakes

//----------------------------------------------------------
//-----------------------------this-------------------------
//----------------------------------------------------------

//---------------easy
//------
var mac={name: 'Mac'};
var charlie={name: 'Charlie'};

mac.sayName=function(){
  return 'Hi, my name is '+this.name;
}
charlie.sayName=mac.sayName;
charlie.sayName()
  //'Hi, my name is Charlie'
//------


//---------------tricky

//------
var mac={name: 'Mac'};
var charlie={name: 'Charlie'};

mac.sayName=()=>'Hi, my name is '+this.name;
mac.sayName();
//------
Game.prototype.restart = function () {
  this.clearLocalStorage();
  this.timer = setTimeout(function() {
    this.clearBoard();
  }, 0);
};
//------
// run this in node v4 to see the expected behavior

this.test = "attached to the module";

var foo = {
  test: "attached to an object"
};

foo.method = function(name, cb){
  this[name] = cb;
};

//Use arrow functions or reg functions to make it attached to object?** think carefully about this

// foo.method("bar", function(){
//   console.log(this.test);
// });
//
// foo.method("bar", ()=>
//   console.log(this.test));

foo.bar();

//------





//----------------------------------------------------------
//-----------------------------mutability-------------------
//----------------------------------------------------------


//---------------tricky
let cart=[];
let grocerylist=[['pizza','brocolli','bok choi'],['detergent', 'fabric softener'],['cumin','oregano']];
for(let i=0; i<grocerylist.length; i++){
  cart.concat(grocerylist[i]);
}
return cart;
