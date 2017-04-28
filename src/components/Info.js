import React from 'react';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <div className="body info">
        <h1>Info</h1>
        <p>Tellyprompt is a television discussion platform built with <i className="fa fa-heart" aria-hidden="true" /> by Aaron Baker as a final-year university project.</p>
        <p><span>All television show data is sourced from </span><a href="https://www.themoviedb.org"><img src="http://tellyprompt.com/img/tmdb-logo.svg" alt="themoviedb.org" className="tmdb" /></a></p>
        <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
      </div>
    );
  }
}