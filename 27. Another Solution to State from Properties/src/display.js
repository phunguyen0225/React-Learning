import { Component } from "react";

//the code is redering every second but the state is set only once
export default class Display extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            start: this.props.start,
            count: this.props.start
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => this.increment(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    static getDerivedStateFromProps(props, state) {
        if (props.start == state.start) {
            return { count: state.count };
        }
        return { start: props.start, count: props.start };
    }

    render() {
        return <span>
            <div></div>
           <span>{ this.state.count }</span>
           <div>{ this.props.hours }:{ this.props.minutes }:{ this.props.seconds }</div>
           <div>Begin: { this.props.start }</div>
           </span>
    }
}

Display.defaultProps = {
    start: 1000
}