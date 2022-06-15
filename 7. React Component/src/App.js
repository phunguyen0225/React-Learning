import { Component, createElement } from "react";

export default class App extends Component {
  render() {
    return createElement('div', null,
    createElement('h2', null, 'hello React'));
  }
}