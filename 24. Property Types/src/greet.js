import { Component } from "react";
import PropTypes from 'prop-types';

export default class Greet extends Component {
    render() {
        return <span>
            Hello { this.props.name }! you are { this.props.age } years old</span>
    }
}

Greet.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

Greet.defaultProps = {
    name: "missing name",
    age: 0
}