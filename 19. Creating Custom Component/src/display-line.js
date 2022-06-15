import {Component} from 'react';

export default class Displayline extends Component {
    render() {
        const { value} = this.props;

        return <li>{value}</li>;
    }
}