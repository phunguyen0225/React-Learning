import { Component } from "react";
import Greet from "./greet";

export default class App extends Component {
  render() {
    return <div>
      <span className="highlighted">Hello</span>  
      <Greet name="bob"></Greet>
    </div> 
  }
}
