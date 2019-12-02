import React, { Component } from "react";

class BreakController extends Component {
  constructor(props) {
    super(props);
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
  }
  handleBreakIncrement() {
    this.props.incrementBreakTime();
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.breakTime);
    }
  }

  handleBreakDecrement() {
    this.props.decrementBreakTime();
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.breakTime);
    }
  }

  render() {
    return (
      <div className={"controller"}>
        <p>BREAK</p>
        <div className={"buttons"}>
          <button onClick={this.handleBreakDecrement}> - </button>
          <span> {Math.floor(this.props.breakTime / 60)} </span>
          <button onClick={this.handleBreakIncrement}> + </button>
        </div>
      </div>
    );
  }
}

export default BreakController;
