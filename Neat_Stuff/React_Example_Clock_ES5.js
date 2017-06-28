// Original code is from https://facebook.github.io/react/docs/state-and-lifecycle.html
// I modified it here to use the "original" ES5 syntax

//--------------------------    ES5 SYNTAX!   ----------------------------------

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//-----------------Clock: this is a subclass of React.Component-----------------
//------------------------------------------------------------------------------

function Clock(props){
  //(1): Call constructor of superclass (React.Component!) to initialize superclass-derived members
  React.Component.call(this, props);
  //(2): initialize the subclass's own members
  this.state= {date: new Date()};
}

// (3): Inherit prototype methods from superclass: not sure exactly what it's inheriting,
// but I'm sure it's very important lol
Clock.prototype= Object.create(React.Component.prototype);
//(4): Assign prototype constructor property
Clock.prototype.constructor= Clock;

//(5): Give Clock its own prototype methods: ...Mount/Unmount, tick, render
Clock.prototype.componentDidMount=function(){
  this.timerID= setInterval(
    () => this.tick(),
    1000
  );
}

Clock.prototype.componentWillUnmount=function(){
    clearInterval(this.timerID);
}

Clock.prototype.tick=function(){
  this.setState({
    date: new Date()
  });
}

Clock.prototype.render=function(){
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

//(6): React updates the DOM to match the Clock's render output.
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
