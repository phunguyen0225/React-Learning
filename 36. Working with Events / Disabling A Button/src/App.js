import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  
  changeCount(value) {
    this.setState({count: this.state.count + value});
  }

  render() {
    return <div>
      <p>Count: { this.state.count }</p>
      <button onClick={ () => this.changeCount(1)}> Increment</button>
      <button onClick={ () => this.changeCount(-1)} disabled= { this.state.count <= 0 }> Decrement</button>
    </div>
  }
}