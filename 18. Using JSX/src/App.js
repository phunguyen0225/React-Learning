import { Component } from "react";

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
      numbers: this.state.numbers.map(number => number + 1)
    });
  }

  render() {
    // const lines = this.state.numbers.map((number, index) => createElement('li', { key: index.toString() }, number));

    // return createElement('div', null,
    //   createElement('button', { onClick: () => this.load() }, 'load'),
    //   createElement('span', null, ' '),
    //   createElement('button', { onClick: () => this.increment() }, 'increment'),
    //   createElement('ul', null, lines));

    const lines = this.state.numbers.map((number, index) => <li key={index.toString()}>{number}</li>);

    return <div>
      <h2>Numbers</h2>
      <button onClick={() => this.load()}>load</button>
      <button onClick={() => this.increment()}>increment</button>
      <ul>{lines}</ul>
    </div>
  }
}
