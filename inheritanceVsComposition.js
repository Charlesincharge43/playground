class Jedi {
  constructor(name){
    this.name = name
  }
  drawSabre(){
    console.log('Schvrmmmmmmm!')
    // ... code for other light sabre stuff
  }
}

class DarkJedi extends Jedi {
  constructor(name){
    super(name)
  }
  crushTownsPeople(){
    // ... code for crushing towns people
  }
}

// Pretty cool so far...
// We can now make new Jedis that can draw sabres, and new DarkJedis that can
// draw sabers AND their own crush the towns people method.

// But what about other evil elements in the Star Wars universe?  They can crush
// towns people too?  Like Sith Lords (dark jedi are NOT the sith!),
// or storm troopers?

// That's okay, we can just make a BadGuys class!

class BadGuys {
  crushTownsPeople(){

  }
}


class Stormtroopers {
  constructor(name){
    this.name = name
  }
  crushTownsPeople(){
    console.log(this.name, 'is crushing the towns people!')
  }
}

class SithLord {
  constructor(name, apprentice){
    this.name = name
    this.apprentice = apprentice
  }
  crushTownsPeople(){
    console.log(this.name, 'is crushing the towns people!')
  }
}

// --------- repetitive code!!
// But that's okay!  Let's just make a

// --------- composition to the rescue!

class StuffBadGuysDo {
  constructor(thiscontext){
    this = thiscontext// how to pass in this context?
  }
  crushTownsPeople(){
    console.log(this.name, 'is crushing the towns people!')
  }
  loseAtTheEnd(){
    console.log(this.name, 'has been vanquished by the protaganist!')
  }
}

class DarkJedi extends Jedi {
  constructor(name){
    super(name)
  }
  badGuyStuff(){
    // ???
  }
}

DarkJedi.prototype.badGuyStuff = new StuffBadGuysDo()
