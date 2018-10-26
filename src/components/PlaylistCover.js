import React, { Component } from "react";
import '../styles/PlaylistCover.scss';
import CoverOverlay from './CoverOverlay'

export default class PlaylistCover extends Component{
    constructor(props){
        super(props);
        this.state = {
            playlistName: "Your Time Capsule",
            songNumber: "55 songs",
            coverImage: './cover.jpg',
            buttonPlay: null
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){

        this.setState((prevState) => {
            return {
                buttonPlay: prevState.buttonPlay === 'Pause' ? 'Play' : 'Pause' 
            }
        })
    }


    render(){
        return(
            <div className="Container playlist">
                <div className="row">
{/*                      <div className={"col-md-12 coverContainer " + (this.state.buttonPlay ? "coverOverlay" : "coverOverlay2" )}>
                        <img src={this.state.coverImage} alt="coverImage"/>
                    </div>  */}
                    <div className="col-md-12 coverContainer">

                        <CoverOverlay  buttonStatus={this.state.buttonPlay} />
                        <img className="img"src={this.state.coverImage} alt="coverImage"/>
                    </div> 
                    <div className="col-md-12 coverContainer">
                        <div className="playlistName">{this.state.playlistName}</div>
                    </div>
                    <div className="col-md-12 coverContainer">
                        <button type="button" className="btn btn-success myBtn" onClick={this.clickHandler}>{this.state.buttonPlay || "Play"}</button>
                    </div>
                    <div className="col-md-12 coverContainer">
                        <div>{this.state.songNumber}</div>
                    </div>
                    <div className="col-md-12 coverContainer">
                        <div className="heartIcon"><span>&#9829;</span></div>
                    </div>

                </div>
                 
                

                
                
            </div>
        )
    }
}