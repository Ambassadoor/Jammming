import React from "react";
import TrackList from "../TrackList/TrackList.js";
import "./Recommendations.css";

export default class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.getRecommendations = this.getRecommendations.bind(this);
  }

  onRecommend() {
    this.props.getRecommendations(this.state.seed_tracks);
  }

  setSeedTrack(playlistTracks) {
    let seedTracks = [];
    if (playlistTracks.length <= 5) {
      seedTracks = playlistTracks;
    } else {
      const randCeiling = playlistTracks.length;
      while (seedTracks.length < 5) {
        let randTrackId =
          playlistTracks[Math.floor(Math.random() * randCeiling)].id;
        if (seedTracks.find((savedTrack) => savedTrack === randTrackId)) {
          return;
        }
        seedTracks.push(randTrackId);
      }
    }
    this.setState({ seed_tracks: seedTracks });
  }

  render() {
    return (
      <div className="Recommendations">
        <h2>Recommendations</h2>
        <TrackList
          tracks={this.props.recommendations}
          onAdd={this.props.onAdd}
          isRemoval={false}
        ></TrackList>
        <button className="Recommendations-generate" onClick={this.onRecommend}>
          Get Recommendations
        </button>
      </div>
    );
  }
}
