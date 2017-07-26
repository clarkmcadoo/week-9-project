import React, { Component } from "react";


class PlaylistItem extends Component{
render(){
    let songs = this.props.songs;
    let tracks = songs.map((track, index)=>{
        return(
            <ul key = {index}>
                <li>{track.userName}</li>
                <li>{track.songArtist}</li>
                <li>{track.songTitle}</li>
                <li>{track.songNotes}</li>
            </ul>

        )
    })
    return(
        <div>
            {tracks}
        </div>

    )
}



}

export default PlaylistItem;