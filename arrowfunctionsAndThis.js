



var mac={name: 'Mac'};
var charlie={name: 'Charlie'};

mac.sayName=function(){
  return 'Hi, my name is '+this.name;
}
mac.sayName()
charlie.sayName=mac.sayName;
charlie.sayName()

// mac.sayName=function(){
//   return 'my name is '+this.name;
// }
// mac.sayLikes=function(){
//   return 'I like '+this.likes
// }
// mac.sayGreetings=function(){
//   // var sayName=function(){
//   //   return 'my name is '+this.name
//   // }
//   // var sayLikes=function(){
//   //   return 'I like '+this.likes
//   // }
//
//   return 'Hi '+this.sayName()+' and '+this.sayLikes();
// }


//note even though the original sayName function was defined in the 'mac' context,
//it would refer to charlie when it is *executed* in the 'charlie' context


var mac={name: 'Mac'};
var charlie={name: 'Charlie'};

mac.setArrowContext=function(){
  mac.sayName=()=>'Hi, my name is '+this.name;
}
mac.setArrowContext()

charlie.sayName=mac.sayName;
charlie.sayName()



//Will now say 'Hi, my name is Mac'

// (even though it is invoked in the charlie context!)


var mac={name: 'Mac'};
var charlie={name: 'Charlie'};

mac.sayName=()=>'Hi, my name is '+this.name;

mac.sayName();//Will say 'Hi, my name is '     :(
charlie.sayName=mac.sayName;
charlie.sayName();//Will say 'Hi, my name is '  :(
