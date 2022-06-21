import { Component } from "react";
import PropTypes from 'prop-types';

export default class Greet extends Component {
    render() {
        return <p>Hi { this.props.name } you have { this.props.pets.length} pets! </p>;
    }
}

Greet.propTypes = {
    name: PropTypes.string,
    pets: PropTypes.array
}

Greet.defaultProps = {
    name: "Missing name"
}