import React from 'react';

const Episode = ({ episode }) => {
    return (
        <a href={`/chat/${ episode.href }`} className="chatLink">
            <div className="row ep-row">
                <div className="still-col"><img src={`http://image.tmdb.org/t/p/original/${ episode.img }.jpg`} className="ep-still" /></div>
                <div className="col-sm-12 desc-col">
                <p className="ep-desc">{ episode.desc }</p>
                </div>
            </div>
        </a>
    );
}

export default Episode;