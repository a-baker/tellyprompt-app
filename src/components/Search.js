import React from 'react';

import Searchbar from './Searchbar';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    const query = this.props.location.query.q || '';
    this.state = {
      query
    };
  }

  handleSearchSubmit(e) {
    e.preventDefault();

    fetch(`/show/search/${query}`)
      .then(res => res.json())
      .then(res => {
        // set state from search results
      });
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