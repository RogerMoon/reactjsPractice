import React, { Component } from "react";
import '../styles/CoverOverlay.scss';
import { ReactComponent as Play } from '../icons/play.svg';
import { ReactComponent as Pause } from '../icons/pause.svg';

export default class CoverOverlay extends Component{

    render(){
        if (!this.props.buttonStatus) return null;
        return (this.props.buttonStatus === 'Play') ? 
        <div className="playOverlay" >
        <Play className="playIcon" />
        </div>
        : <div className="pauseOverlay">
        <Pause className="pauseIcon" />
        </div>
    }
}