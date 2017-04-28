import React from 'react';

import Episode from './Episode';

export default class Favourites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: [
        { href: '1396/5/14', img: 's9QORY5rrwzQpTCTgNdBRyKehtL', desc: 'Breaking Bad S5E14: Ozymandias' },
        { href: '1399/6/9', img: 'qb302fko45T0TvgsFa12IbSiq2P', desc: 'Game of Thrones S6E9: Battle of the Bastards' },
        { href: '1399/6/5', img: 'rqPtGylElBAud1BBZpyOq7MQ6Ak', desc: 'Game of Thrones S6E5: The Door' },
        { href: '38472/1/9', img: 'rjRBAIoTWrbHbtBhBsLNtEzcz6J', desc: 'Marvel\'s Jessica Jones S1E9: AKA Sin Bin' },
        { href: '1399/6/10', img: 'm8vzoOKnjzFG8M5iprtweQEQzrW', desc: 'Game of Thrones S6E10: The Winds of Winter' },
      ]
    }
  }

  episodes() {
    return this.state.episodes.map(episode => <Episode episode={episode} key={episode.href} />);
  }
  
  render() {
    return (
      <div className="body">
        <h1 className="sectionHead"><i className="fa fa-heart" aria-hidden="true" /><span>Favourites</span></h1>
        <div className="favouritesWrapper">
          {this.episodes()}
        </div>
        <div className="pageButtons">
          <div className="row">
            <div className="col-xs-4"><a href="/favourites/0" className="btn btn-lg btn-pages btn-prev inactive"><i className="fa fa-chevron-left" aria-hidden="true" /></a></div>
            <div className="col-xs-4">
              <p className="page-num">Page: 1</p>
            </div>
            <div className="col-xs-4"><a href="/favourites/2" className="btn btn-lg btn-pages btn-next inactive"><i className="fa fa-chevron-right" aria-hidden="true" /></a></div>
          </div>
        </div>
      </div>
    );
  }
}