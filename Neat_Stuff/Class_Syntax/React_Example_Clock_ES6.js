// This code is from https://facebook.github.io/react/docs/state-and-lifecycle.html
// Try it on code pen here: http://codepen.io/gaearon/pen/amqdNA?editors=0010

//--------------------------    ES6 SYNTAX!   ----------------------------------

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//-----------------Clock: this is a subclass of React.Component-----------------
//------------------------------------------------------------------------------

class Clock extends React.Component {
  constructor(props) {
    super(props);//(1): Call constructor of superclass (React.Component!) to initialize superclass-derived members
    this.state = {date: new Date()};//(2): initialize the subclass's own members
  }

  //(3) & (4): Inheriting superclass (React.Component) prototype methods, and assigning prototype constructor property
  //already taken care of (I think line 11 does this automatically)

  //(5): Give Clock its own prototype methods: ...Mount/Unmount, tick, render

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

//(6): React updates the DOM to match the Clock's render output.
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
