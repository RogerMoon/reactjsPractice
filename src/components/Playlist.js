import React, { Component } from "react";
import '../styles/Playlist.scss';
import { ReactComponent as Play } from '../icons/play.svg';
import { ReactComponent as Pause } from '../icons/pause.svg';
import { ReactComponent as Speaker } from '../icons/speaker.svg';


export default class Playlist extends Component{
    constructor(props) {
        super(props);
        this.clickPlay = this.clickPlay.bind(this);
        this.state = {
        playlist: [
            {
            title: "Title 1",
            artist: "Artist 1",
            album: "Album 1",
            explicit: true,
            lenght: "4:20",
            playing: false,
            pause: false
            },
            {
                title: "Title 2",
                artist: "Artist 2",
                album: "Album 2",
                explicit: false,
                lenght: "2:20",
                playing: false,
                pause: false
            },
            {
                title: "Title 3",
                artist: "Artist 3",
                album: "Album 3",
                explicit: false,
                lenght: "1:23",
                playing: false,
                pause: false
            },
            {
                title: "Title 4",
                artist: "Artist 4",
                album: "Album 4",
                explicit: false,
                lenght: "2:30",
                playing: false,
                pause: false
            }
        ]
        };

    }

    clickPlay(id){
        const List = this.state.playlist;
        List.forEach((x,i)=>{
            if(List[i].title == id && List[i].playing == true){
                List[i].playing = false;
                List[i].pause = true;
                this.setState({playing:false});
                this.setState({pause:true});
            }
            else
                if(List[i].title == id && List[i].playing == false && List[i].pause == false){
                    List[i].playing = true;
                    this.setState({playing:true});
                }
                else
                    if(List[i].title == id && List[i].playing == false && List[i].pause == true){
                        List[i].playing = true;
                        List[i].pause = false;
                        this.setState({playing:true});
                        this.setState({pause:false});
                    }

        });
        List.forEach((x,i)=>{
            if(List[i].title != id){
                List[i].playing = false;
                List[i].pause = false;
                this.setState({playing:false});
                this.setState({pause:false});
            }
        })
        debugger;

        
    }

    render(){
        return(

            this.state.playlist.map(list => {
                return(
                    <div className="Container">
                        <div className="row playlist">
                            <div className="col-md-12">
                                <div className="playlistContainer">
                                    <div className="side1" onClick={this.clickPlay.bind(this,list.title)}>
                                        <div className={"title " + (list.playing || list.pause ? "songPlaying" : null)}> 
                                            {list.playing ? <Speaker className="speakerIcon" /> : <span className="noteIcon">&#9834;</span>}
                                            {list.playing && !list.pause ? <Pause className="pauseIcon" /> : <Play className="playIcon" />}   
                                            {list.title}
                                            
                                        </div>
                                        <div className="info">{list.explicit ? <span className="explicit"> EXPLICIT </span> : null}{list.artist} <span>&#8226;</span> {list.album} </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            })

        )
    }
}