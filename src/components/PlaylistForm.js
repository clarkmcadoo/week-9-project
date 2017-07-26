import React, { Component } from 'react';

class PlaylistForm extends Component{
    constructor(props){
        super(props);
    this.state={
        userName: "",
        songTitle: "",
        songArtist: "",
        songNotes: "",
    }

    }

    handleInput = (e) => {
        e.preventDefault()
        console.log(e.target.value);
        this.setState({[e.target.name]: e.target.value});
      };


    addToList = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);
        console.log("This is the state:",listItem);
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }
  ).then(response => {
    console.log(response, "yay");

  }).catch(err => {
    console.log(err, "boo!");
  });
  this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
}

    render(){
        return(

            <form className = "form-info" onChange={this.handleInput}>
                <label htmlFor="userName">User Name:</label>
                <input type="text" id="userName" name="userName" placeholder="Name or User Name" value={this.state.userName}/>

                <label htmlFor="songArtist">Artist/Band:</label>
                <input type="text" id="songArtist" name="songArtist" placeholder="Artist or Band Names" value={this.state.songArtist}/>

                <label htmlFor="songTitle">Song Title:</label>
                <input type="text" id="songTitle" name="songTitle" placeholder="Song Title" value={this.state.songTitle}/>

                <label htmlFor="songNotes">Notes About Song:</label>
                <textarea id="songNotes" name="songNotes" rows="4" cols="25" value={this.state.songNotes}/>

                <button type="submit" onClick={this.addToList}>Submit</button>
            </form>

        )
    }
}

export default PlaylistForm;