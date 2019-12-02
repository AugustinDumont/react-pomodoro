import React, {Component} from "react";
import ReactDOM from "react-dom";

import Timer from "../components/Timer";
import TimerControllers from "../components/TimerControllers";
import Sound from "../components/Sound";

import "../scss/app.scss";

const defaultWorkTime = 1500;
const defaultBreakTime = 300;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // this.state = définir état de l'objet qui seront transmis et utilisés par les composants enfants.
            currentTime: null,

            timerRunning: false,
            cycle: "Session", // cycle alternera entre "Session" ou "Break"
            workTime: defaultWorkTime,
            breakTime: defaultBreakTime,
            sound: "on", // sound variera entre "on" et "off" quand <button></button> sera cliqué.
        };

        this.setSound = this.setSound.bind(this);
        this.incrementWorkTime = this.incrementWorkTime.bind(this); // bind permet à la fonction setSound d'accéder au state du Component App
        this.decrementWorkTime = this.decrementWorkTime.bind(this);
        this.incrementBreakTime = this.incrementBreakTime.bind(this);
        this.decrementBreakTime = this.decrementBreakTime.bind(this);
        this.setCurrentTime = this.setCurrentTime.bind(this);
        this.setTimerRunning = this.setTimerRunning.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }

    // REM : On ajoutera deux props au <Sound/>, afin d'accéder au state de App :
    // 1) sound = {this.state.sound} afin de checker si sound est "on" ou "off"
    // 2) setSound = {this.setSound} afin d'accéder à la méthode setSound() qui permet de modifier l'état "on" ou "off" du son.

    setSound(sound) {
        // Méthode accédee par prop setSound qui permet de passer le state sound de "on" à "off" ou de "off" à "on".
        this.setState(() => ({
            sound,
        }));
    }

    incrementWorkTime() {
        this.setState(() => ({
            workTime: this.state.workTime + 60,
        }));
    }

    decrementWorkTime() {
        this.setState(() => ({
            workTime: this.state.workTime - 60,
        }));
    }

    incrementBreakTime() {
        this.setState(() => ({
            breakTime: this.state.breakTime + 60,
        }));
    }

    decrementBreakTime() {
        this.setState(() => ({
            breakTime: this.state.breakTime - 60,
        }));
    }

    setCurrentTime(value) {
        this.setState(() => ({
            currentTime: value,
        }));
    }

    setTimerRunning() {
        this.setState(state => ({
            timerRunning: !state.timerRunning,
        }));
    }

    startTimer() {
        // Running
        this.setState(state => {
            const newObj = {};

            newObj.timerRunning = true;

            newObj.currentTime =
                state.cycle === "Session" ? state.workTime : state.breakTime;

            return newObj;
        });

        // Function executed every second
        const runningTimer = setInterval(() => {
            console.log(this.state.currentTime);

            // si le cycle est terminé
            if (this.state.currentTime === 0) {
                this.setState(state => {
                    clearInterval(runningTimer);

                    const newObj = {};

                    newObj.cycle =
                        state.cycle === "Session" ? "Break" : "Session";

                    newObj.currentTime =
                        state.cycle === "Session"
                            ? state.breakTime
                            : state.workTime;
                    return newObj;
                });
            } else {
                // décrémentation tu timer toutes les secondes
                this.setState(state => ({
                    currentTime: state.currentTime - 1,
                }));
            }
        }, 1000);
    }

    render() {
        return (
            <div className={"main"}>
                <h1>POMODORO</h1>
                <Timer
                    startTimer={this.startTimer}
                    setTimerRunning={this.setTimerRunning}
                    setCurrentTime={this.setCurrentTime}
                    workTime={this.state.workTime}
                    breakTime={this.state.breakTime}
                    cycle={this.state.cycle}
                    currentTime={this.state.currentTime}
                    timerId={this.state.TimerId}
                    timerRunning={this.state.timerRunning}
                />
                <TimerControllers
                    workTime={this.state.workTime}
                    breakTime={this.state.breakTime}
                    incrementWorkTime={this.incrementWorkTime}
                    decrementWorkTime={this.decrementWorkTime}
                    incrementBreakTime={this.incrementBreakTime}
                    decrementBreakTime={this.decrementBreakTime}
                />
                <Sound setSound={this.setSound} sound={this.state.sound} />
            </div>
        );
    }
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
