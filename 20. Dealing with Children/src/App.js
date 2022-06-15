import { Component } from "react";
import DisplayCount from "./display-count";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {count : 0};

    setInterval(() => this.change(), 1000);
  }

  change() {
    const count = this.state.count + 1;

    this.setState({count});
  }

  render() {
    return <div>
      <p>Count</p>
      <DisplayCount count = {this.state.count} > 
        <hr/>
        <p>Current Data</p>
        <hr/>
      </DisplayCount>
    </div>;
  }
}
