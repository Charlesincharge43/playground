//--------------------------    ES6 SYNTAX!   ----------------------------------

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//-----------------Mammal: this is the superclass-------------------------------
//------------------------------------------------------------------------------
class Mammal{
  constructor(name){
    // (1): create methods within constructor
    this.name = name;
    this.offspring = [];
  }
  // NO COMMAS!!  DO NOT PUT COMMAS HERE (OR BETWEEN OTHER PROTOTYPAL METHODS)
  // OR YOU'LL BE SORRY

  // (2): create prototype methods (note these are happening INSIDE the Mammal
  // block, unlike in ES5)
  haveBaby(){
    var baby = new Mammal('Baby ' + this.name);
    this.offspring.push(baby);
    return baby;
  }

  sayHello(){
    return 'My name is ' + this.name + '!';
  }

  static goExtinct(){//(2.5) class method
    //...
  }
}


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//-----------------Cat: this is the subclass------------------------------------
//------------------------------------------------------------------------------
class Cat extends Mammal{
  constructor(name, color){
    // (3): Call constructor of superclass (Mammal!) via super, to initialize
    // superclass-derived members (this.name, this.offspring)
    super(name);//Note how you don't need to pass in "this" as in ES5

    // (4): initialize the subclass's own members
    this.color = color;
  }

  // (5): Inherit prototype methods from superclass:
  // Cat automatically inherits prototype methods ( haveBaby() and sayHello() )
  // from superclass Mammal!!!

  // (6): Assign prototype constructor property:
  // Cat instances' prototype constructor property will automatically reference
  // the constructor Cat!

  // (7): Give cat.prototype its own haveBaby method different from that of
  // Mammal's.
  haveBaby(color){
    var baby = new Cat('Baby ' + this.name, color);
    this.offspring.push(baby);
    return baby;
  }
}

//note YOU CAN'T EXTEND FROM MULTIPLE SUPERS (Like you could in ES5...) that kinda sucks!!
//!!!!
