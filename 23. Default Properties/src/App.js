import { Component } from "react";
import Greet from "./greet";

export default class App extends Component {
  render() {
    return <div>
      <p><Greet name="Phu"></Greet></p>
      <p><Greet></Greet></p>
    </div>
  }
}
