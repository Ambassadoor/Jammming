import React from "react";
import TrackList from "../TrackList/TrackList.js";
import "../SearchResults/SearchResults.css";

export default class Recommendations extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Recommendations</h2>
        <TrackList
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd}
          isRemoval={false}
        ></TrackList>
      </div>
    );
  }
}
