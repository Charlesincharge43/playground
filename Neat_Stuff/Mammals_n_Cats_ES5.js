//--------------------------    ES5 SYNTAX!   ----------------------------------

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//-----------------Mammal: this is the superclass-------------------------------
//------------------------------------------------------------------------------
function Mammal(name){
  //(1): create methods within constructor
	this.name = name;
	this.offspring = [];
}

//(2): create prototype methods
Mammal.prototype.haveBaby = function(){
	var baby = new Mammal('Baby ' + this.name);
	this.offspring.push(baby);
	return baby;
};

Mammal.prototype.sayHello = function(){
	return 'My name is ' + this.name + '!' ;
};

Mammal.goExtinct = function(){//(2.5) class method
	//...
};

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//-----------------Cat: this is the subclass------------------------------------
//------------------------------------------------------------------------------
function Cat(name, color){
  // (3): Call constructor of superclass (Mammal!) to initialize superclass-derived
	// members
	Mammal.call(this, name);//(i.e., initialize this.name and this.offspring for Cat)

  // (4): initialize the subclass's own members
	this.color = color;
}
// (5): Inherit prototype methods from superclass: haveBaby() and sayHello()
Cat.prototype = Object.create(Mammal.prototype);
// (6): Assign prototype constructor property so you know future instances of
// Cat belongs to Cat
// (this is required because you lose the constructor property when you do
// Cat.prototype assignment
Cat.prototype.constructor = Cat;

// (7): Give cat.prototype its own haveBaby method different from that of Mammal's.
// New instances of Cat will still have both haveBaby methods in its prototype
// chain, but the "closest one" (this one below) will be invoked
Cat.prototype.haveBaby = function(color){
	var baby = new Cat('Baby ' + this.name, color);
	this.offspring.push(baby);
	return baby;
};
