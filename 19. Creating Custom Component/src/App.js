import { Component } from "react";
import Displayline from "./display-line";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: []
    };
  }

  load() {
    this.setState({
      numbers: [1, 2, 3, 4, 5]
    });
  }

  increment() {
    this.setState({
      numbers: this.state.numbers.map(value => value + 1)
    });
  }

  render() {
    const lines = this.state.numbers.map((number, index) => 
    <Displayline value = {number} key = {index.toString()}/>);

    return <div>
      <h2>Numbers</h2>
      <button onClick={() => this.load()}>load</button>
      <button onClick={() => this.increment()}>increment</button>
      <ul>{lines}</ul>
    </div>
  }
}
