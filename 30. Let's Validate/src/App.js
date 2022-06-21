import { Component } from "react";
import Greet from "./greet";

export default class App extends Component {
  
  render() {
    return <div>
      <div><Greet name="Joe"/></div>
      <div><Greet name="Sara"/></div>
      <div><Greet /></div>
      </div>;
  }
}