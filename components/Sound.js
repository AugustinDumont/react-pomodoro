import React, {Component} from "react";

import mute from "../public/assets/mute.svg";
import volume from "../public/assets/volume.svg";

// Création de la méthode toggleSound qui accède au state du component <App/> grâce au props ajoutés dans le <sound/> /index.js
// Si etat de sound = "on", onClick, passer à "off" et vice-vers-ça.

class Sound extends Component {
    toggleSound(e) {
        const img = e.currentTarget.querySelector("img");

        if (this.props.sound === "on") {
            img.src = mute;
            this.props.setSound("off");
        } else {
            img.src = volume;
            this.props.setSound("on");
        }
    }

    render() {
        return (
            <button
                className={"volume"}
                onClick={e => {
                    this.toggleSound(e);
                }}>
                <img src={volume} />
            </button>
        );
    }
}

export default Sound;
