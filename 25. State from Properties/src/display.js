import { Component } from "react";

//the code is redering every second but the state is set only once
export default class Display extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: this.props.start,
            hours: this.props.hours,
            minutes: this.props.minutes,
            seconds: this.props.seconds
        };
        console.log("called...");
    }

    componentDidMount() {
        setInterval(() => this.increment(), 1000);
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {

        console.log('reder...');
        return <span>
            <div></div>
           <span>{ this.state.count }</span>
           <div>{ this.state.hours }:{ this.state.minutes }:{ this.state.seconds }</div>
           </span>
    }
}

Display.defaultProps = {
    start: 1000
}