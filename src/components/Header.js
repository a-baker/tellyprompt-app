import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return(
      <div role="navigation" className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" data-toggle="collapse" data-target=".navbar-collapse" className="navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
            </button>
            <IndexLink to="/" className="navbar-brand"><img src="http://tellyprompt.com/img/tellyprompt.svg" className="logo" /></IndexLink>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/favourites" title="Favourites" className="btn_fav"><i className="fa fa-heart" /><span>Favourites</span></Link></li>
              <li><Link to="/popular" title="Popular" className="btn_popular"><i className="fa fa-line-chart" /><span>Popular</span></Link></li>
              <li><Link to="/search" title="Search" className="btn_search"><i className="fa fa-search" /><span>Search</span></Link></li>
              <li><Link to="/info" title="Info" className="btn_info"><i className="fa fa-info-circle" /><span>Info</span></Link></li>
              <li><Link to="/signout" title="Sign out" className="btn_signout"><i className="fa fa-sign-out" /><span>Sign out</span></Link></li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Header;