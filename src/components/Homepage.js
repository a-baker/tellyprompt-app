import React from 'react';

import Session from './Session';
const { user } = Session;

import Searchbar from './Searchbar';

const Homepage = () => {
    return (
      <div className="welcome">
        <div className="module-header">
          <h1>Hello { user.name }!</h1>
        </div>
        <div className="module-main">
          <h2 className="hello">
            Watched anything good recently?
          </h2>
          <Searchbar />
        </div>
      </div>
    );
}

export default Homepage;