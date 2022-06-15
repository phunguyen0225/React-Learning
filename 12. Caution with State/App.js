import { Component, createElement } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0};

    setInterval(() => this.increment(), 1000);
  }

  increment() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return this.state.count;
  }
}