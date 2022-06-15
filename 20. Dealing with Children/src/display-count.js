import {Component} from 'react';

export default class DisplayCount extends Component {
    render() {
        return <span>
            <span>{this.props.count}</span>
            <span>{this.props.children}</span>
        </span>
    }
}