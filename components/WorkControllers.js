import React, { Component } from "react";

class WorkController extends Component {
  constructor(props) {
    super(props);
    this.handleWorkDecrement = this.handleWorkDecrement.bind(this); // nécessite aussi un bind !
    this.handleWorkIncrement = this.handleWorkIncrement.bind(this);
  }

  handleWorkIncrement() {
    this.props.incrementWorkTime();
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.workTime);
    }
  }

  handleWorkDecrement() {
    this.props.decrementWorkTime();
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.workTime);
    }
  }

  render() {
    return (
      <div className={"controller"}>
        <p>SESSION</p>
        <div className={"buttons"}>
          <button onClick={this.handleWorkDecrement}> - </button>
          <span> {Math.floor(this.props.workTime / 60)} </span>
          <button onClick={this.handleWorkIncrement}> + </button>
        </div>
      </div>
    );
  }
}

export default WorkController;
