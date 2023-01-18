import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList.js'
import { Track } from '../Track/Track';

export default class Playlist extends React.Component {
    render() {
        return <div class="Playlist">
        <input defaultValue={'New Playlist'}/>
        {/*<TrackList></TrackList>*/}
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    }
}