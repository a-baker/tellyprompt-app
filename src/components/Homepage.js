import React from 'react';

import Searchbar from './Searchbar';

const Homepage = () => {
    let username = "Aaron";
    return (
      <div className="welcome">
        <h1 className="hello">
            Hello, {username}.
            <span className="question">Watched anything good recently?</span>
        </h1>
        <Searchbar />
      </div>
    );
}

export default Homepage;