import { Component } from "react";

//the code is redering every second but the state is set only once
export default class Display extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: this.props.start,
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

    render() {
        return <span>
            <div></div>
           <span>{ this.state.count }</span>
           <div>{ this.props.hours }:{ this.props.minutes }:{ this.props.seconds }</div>
           </span>
    }
}

Display.defaultProps = {
    start: 1000
}