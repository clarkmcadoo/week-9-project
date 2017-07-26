import React, { Component } from "react";

import PlaylistItem from "./PlaylistItem";

class Playlist extends Component {
  constructor(props) {
    super(props);

    this.state={
        songs: []
    }
  }

  componentWillMount() {
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        return results.json();
      })
      .then(data => {
          console.log(data);
        this.setState({ songs: data });
        console.log("state", this.state.songs);
      });
  }

  fetchData = e => {
    e.preventDefault();
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ songs: data });
      });
  };

  render(){
      return(
          <div className="playlist">
              <button onClick={this.fetchData}>Update!</button>
              <PlaylistItem songs = {this.state.songs}/>
              </div>
      )
  }
}

export default Playlist;
