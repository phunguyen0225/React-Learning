import { Component } from "react";
import PropTypes from 'prop-types';

export default class Greet extends Component {
    render() {
        return <span>Hi {this.props.name} and her pets:
            <ul>
                {this.props.pets.map(petName => <li key={petName}>{petName}</li>)}</ul>
        </span>;
    }
}

Greet.propTypes = {
    name: PropTypes.string,
    pets: function (properties, propName, componentName) {
        const petNames = properties[propName];

        return new Set(petNames).size < petNames.length ? 
         new Error(`Pet names should be unique. Duplcates found in '${petNames.join(", ")}' given for ${componentName}`)
         : null;
    }
}

Greet.defaultProps = {
    name: "Missing name"
}