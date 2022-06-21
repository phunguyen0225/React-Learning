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
        
        if (new Set(petNames).size < petNames.length ) {
            return new Error(`Pet names should be unique. Duplcates found in '${petNames.join(", ")}' given for ${componentName}`)
        }

        if (petNames.includes(properties.name)) {
            return new Error(`Hey the name ${properties.name} is also in the names of pets in ${petNames.join(', ')}. Please make sure pet name is not the same as the person`);
        }
    }
}

Greet.defaultProps = {
    name: "Missing name"
}