import { Component } from "react";
import PropTypes from 'prop-types';

export default class Greet extends Component {
    render() {
        return <p>Hi { this.props.name }</p>;
    }
}

Greet.propTypes = {
    name: function(props, propName, componentName) {
        const name =props[propName];

        if(!name) {
            return new Error ('You did not provide a name');
        }
        if(!/[A-Z]/.test(name[0])) {
            return new Error(`The value '${name}' for property '${propName}' in component '${componentName}' should be capitalized`);
        }
        return null;
    }
}

// Greet.defaultProps = {
//     name: "Missing name"
// }