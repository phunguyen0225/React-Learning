import { Component } from "react";
import Greet from "./greet";

export default class App extends Component {

  render() {
    const pets = ['Rover', 'Fido', 'Fluffy'];
    return <div>
      <div><Greet name="Sara" pets = { pets }/></div>
      </div>;
  }
}