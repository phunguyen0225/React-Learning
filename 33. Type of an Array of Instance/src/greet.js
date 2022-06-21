import { Component } from "react";
import PropTypes from 'prop-types';
import Name from './name';

export default class Greet extends Component {
    render() {
        return <span>Hi { this.props.name } and her pets:
        <ul>
            { this.props.pets.map(petName => <li key={petName.name}>{petName.name}</li>)}</ul> 
        </span>;
    }
}

Greet.propTypes = {
    name: PropTypes.string,
    pets: PropTypes.arrayOf(PropTypes.instanceOf(Name))
}

Greet.defaultProps = {
    name: "Missing name"
}