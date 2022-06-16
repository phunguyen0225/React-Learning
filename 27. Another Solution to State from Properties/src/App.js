import { Component } from "react";
import Display from "./display";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.begin = 10;
  }
  componentDidMount() {
    setInterval(() => this.setState({}), 1000);
    setInterval(() => this.begin = 50, 10000);
  }
  
  render() {
    const now = new Date();

    return <div>
      In App: { now.getSeconds()}
    <Display start={ this.begin } 
      hours = { now.getHours() } 
      minutes= { now.getMinutes() } 
      seconds = { now.getSeconds() }/>
    </div>
  }
}
