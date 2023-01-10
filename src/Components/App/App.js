import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js'
import SearchResults from '../SearchResults/SearchResults.js'
import Playlist from '../Playlist/Playlist.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [{name: 'name1', artist: 'artist1', album: 'album1', id: 1}]}
  }
  render() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar></SearchBar>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} ></SearchResults>
          <Playlist></Playlist>
        </div>
      </div>
    </div>
  );
}};


