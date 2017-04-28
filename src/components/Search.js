import React from 'react';

import Searchbar from './Searchbar';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <div className="body">
        <h1 className="sectionHead">
          <i className="fa fa-search" aria-hidden="true"></i>
          <span>Search</span>
        </h1>
        <Searchbar />
      </div>
    );
  }
}