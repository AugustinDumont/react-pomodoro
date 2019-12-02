import React, {Component} from "react";
import WorkController from "./WorkControllers";
import BreakController from "./BreakControllers";

class TimerControllers extends Component {
    render() {
        return (
            <div className={"timer-controllers"}>
                <WorkController
                    workTime={this.props.workTime}
                    incrementWorkTime={this.props.incrementWorkTime}
                    decrementWorkTime={this.props.decrementWorkTime}
                    timerRunning={this.props.timerRunning}
                />
                <BreakController
                    breakTime={this.props.breakTime}
                    incrementBreakTime={this.props.incrementBreakTime}
                    decrementBreakTime={this.props.decrementBreakTime}
                    timerRunning={this.props.timerRunning}
                />
            </div>
        );
    }
}
export default TimerControllers;
