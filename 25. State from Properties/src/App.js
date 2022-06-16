import { Component } from "react";
import Display from "./display";

export default class App extends Component {
  componentDidMount() {
    setInterval(() => this.setState({}), 1000);
  }
  
  render() {
    const now = new Date();

    return <div>
      In App: { now.getSeconds()}
    <Display start={ 100 } 
      hours = { now.getHours() } 
      minutes= { now.getMinutes() } 
      seconds = { now.getSeconds() }/>
    </div>
  }
}
