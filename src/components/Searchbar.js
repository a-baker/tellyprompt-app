import React, { Component } from 'react';

export default class Searchbar extends Component {
    render() {
        return (
            <div className="search">
                <form className="welcomeSearchForm">
                    <input type="text" placeholder="Search for a show..." className="searchBox" />
                    <div className="errBar">
                        <span className="errText"></span>
                    </div>
                </form>
            </div>
        );
    }
}