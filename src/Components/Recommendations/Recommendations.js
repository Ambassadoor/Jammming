import React from "react";
import TrackList from "../TrackList/TrackList.js";
import "./Recommendations.css";

export default class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.onRecommend = this.onRecommend.bind(this);
    this.setSeedTrack = this.setSeedTrack.bind(this);
    this.state = {
      seedTracks: [],
    };
  }

  onRecommend() {
    this.props.onRecommend(this.state.seedTracks);
  }

  setSeedTrack() {
    const playlistTracks = this.props.playlistTracks;
    let seedTracks = [];
    if (playlistTracks.length <= 5) {
      seedTracks = playlistTracks;
    }
    if (playlistTracks.length >= 5) {
      const randCeiling = playlistTracks.length;
      while (seedTracks.length < 5) {
        let randTrackId =
          playlistTracks[Math.floor(Math.random() * randCeiling)];
        if (seedTracks.find((savedTrack) => savedTrack === randTrackId)) {
          continue;
        }
        seedTracks.push(randTrackId);
      }
    }

    this.setState({ seedTracks: seedTracks }, () => {
      this.onRecommend();
    });
  }

  render() {
    return (
      <div className="Recommendations">
        <h2>Recommendations</h2>
        <button
          className="Recommendations-generate"
          onClick={this.setSeedTrack}
        >
          Get Recommendations
        </button>
        <TrackList
          tracks={this.props.recommendations}
          onAdd={this.props.onAdd}
          isRemoval={false}
        ></TrackList>
      </div>
    );
  }
}
