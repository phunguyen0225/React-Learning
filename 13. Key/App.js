import { Component, createElement } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    };

    setTimeout(() => this.change(), 5000);
  }

  change() {
    const values = this.state.values;
    values[0] += 10;
    this.setState({values});
  }
  render() {
    const numbers = this.state.values.map((number, index) =>
        createElement('li', {key: index.toString()}, number));

    return createElement('div', null, 
        createElement('h2', null, 'Numbers'),
        createElement('ul', null, numbers));
  }
}
