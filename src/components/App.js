import React, { Component } from 'react';

import '../App.css';

import NavBar from "./NavBar.js";
import PlaylistForm from "./PlaylistForm.js";
import Playlist from "./Playlist.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="main">
        <PlaylistForm/>
        <Playlist/>
        </div>


      </div>
    );
  }
}

export default App;
