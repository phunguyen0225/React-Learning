import { Component } from "react";
import PropTypes from 'prop-types';

export default class Greet extends Component {
    render() {
        return <span>Hi { this.props.name } and her pets:
        <ul>
            { this.props.pets.map(petName => <li key={petName}>{petName}</li>)}</ul> 
        </span>;
    }
}

Greet.propTypes = {
    name: PropTypes.string,
    pets: PropTypes.arrayOf(PropTypes.string)
}

Greet.defaultProps = {
    name: "Missing name"
}