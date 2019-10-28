import React, { Component } from 'react';

import Episode from './Episode';
import { getEpisodes } from './API';

export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: []
    }

    getEpisodes()
      .then(episodes => {
        episodes.sort((a, b) => {
          return b.desc > a.desc ? 1 : -1;
        });
        this.setState({ episodes })
      });
  }

  episodes() {
    return this.state.episodes.map(episode => <Episode episode={episode} key={episode.href} />);
  }
  
  render() {
    return (
      <div className="body">
        <div className="module-header">
          <h1>Popular</h1>          
        </div>
        <div className="module-main">
          <div className="popularWrapper">
            {this.episodes()}
          </div>
        </div>
      </div>
    );
  }
}