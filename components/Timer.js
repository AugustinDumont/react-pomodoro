import React, {Component} from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
    }

    twoDigit(value) {
        return value < 10 ? `0${value}` : value;
    }

    formatTime() {
        let str;

        if (this.props.currentTime !== null) {
            const minutes = this.twoDigit(
                Math.floor(this.props.currentTime / 60),
            );
            const seconds = this.twoDigit(this.props.currentTime % 60);

            str = `${minutes}:${seconds}`;
        } else {
            str = "CLICK !";
        }

        return str;
    }

    render() {
        return (
            <div className={"timer"}>
                <span className={"cycle"}>{this.props.cycle} on going...</span>
                <button
                    className={"count-down btn"}
                    onClick={e => {
                        this.props.startTimer();
                    }}>
                    <svg
                        width={"180px"}
                        height={"60px"}
                        viewBox={"0 0 180 60"}
                        className={"border"}>
                        <polyline
                            points={"179,1 179,59 1,59 1,1 179,1"}
                            className={"bg-line"}
                        />
                        <polyline
                            points={"179,1 179,59 1,59 1,1 179,1"}
                            className={"hl-line"}
                        />
                    </svg>
                    {this.formatTime()}
                </button>
            </div>
        );
    }
}

export default Timer;
