import React from 'react';

import Episode from './Episode';
import { getEpisodes } from './API';

export default class Favourites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: []
    }

    getEpisodes()
      .then(episodes => this.setState({ episodes }));
  }

  episodes() {
    return this.state.episodes.map(episode => <Episode episode={episode} key={episode.href} />);
  }
  
  render() {
    return (
      <div className="body">
        <div className="module-header">
          <h1>Favourites</h1>          
        </div>
        <div className="module-main">
          <div className="favouritesWrapper">
            {this.episodes()}
          </div>
          <div className="pageButtons" style={{display: 'none'}}>
            <div className="row">
              <div className="col-xs-4"><a href="/favourites/0" className="btn btn-lg btn-pages btn-prev inactive"><i className="fa fa-chevron-left" aria-hidden="true" /></a></div>
              <div className="col-xs-4">
                <p className="page-num">Page: 1</p>
              </div>
              <div className="col-xs-4"><a href="/favourites/2" className="btn btn-lg btn-pages btn-next inactive"><i className="fa fa-chevron-right" aria-hidden="true" /></a></div>
            </div>
          </div>
          </div>
      </div>
    );
  }
}