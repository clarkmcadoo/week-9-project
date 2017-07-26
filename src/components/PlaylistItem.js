import React, { Component } from "react";


class PlaylistItem extends Component{
render(){
    let songs = this.props.songs;
    let tracks = songs.map((track, index)=>{
        return(

            <div key = {index} className="importedTrack">
                <p>User: {track.userName}</p>
                <p>Artist: {track.songArtist}</p>
                <p>Title: {track.songTitle}</p>
                <p>Notes: {track.songNotes}</p>
            </div>


        )
    })
    return(
        <div className="playlistitems">
            {tracks}
        </div>

    )
}



}

export default PlaylistItem;