import { Component } from "react";
import Greet from "./greet";

export default class App extends Component {
  render() {
    return <div>
      <p><Greet name="Phu" age ={ 21 }></Greet></p>
      <p><Greet name="Dung" age ={ 53 }></Greet></p>
      <p><Greet></Greet></p>
    </div>
  }
}
