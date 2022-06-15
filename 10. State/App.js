import { Component, createElement } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { location: 'World'};
  }
  render() {
    //return `Hello ${this.state.location}`;

    return createElement('span', null,
        createElement('span', null, 'Hello '),
        createElement('span', null, this.state.location));
  }
}