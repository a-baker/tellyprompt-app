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
        <div className="module-header">
          <h1>Search</h1>          
        </div>
        <div className="module-main">
          <Searchbar />
        </div>
      </div>
    );
  }
}