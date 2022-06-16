import { Component } from "react";

export default class Greet extends Component {
    render() {
        return <span>Hello { this.props.name } </span>
    }
}

Greet.defaultProps = {
    name: "World"
}