import { Component } from "react";
import Greet from "./greet";
import Name from "./name";

export default class App extends Component {

  render() {
    const pets = [new Name('Rover'), new Name('Fido'), new Name('Fluffy')];
    return <div>
      <div><Greet name="Sara" pets = { pets }/></div>
      </div>;
  }
}