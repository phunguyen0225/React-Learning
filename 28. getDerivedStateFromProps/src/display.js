import { Component } from "react";

export default class Display extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: this.props.start
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => this.increment(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    static getDerivedStateFromProps(props, state) {
        if (state.count < props.start) {
            return {count: props.start };
        }

        return null;
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return <span>{this.state.count}</span>;
    }
}

Display.defaultProps = {
    start: 1000
}