import React from 'react';

const Message = ({ author, message, dateTime }) => {
    return (
        <div className="message">
            <h2 className="messageAuthor">
                { author }
                <span className="postTime">
                    { dateTime }
                </span>
            </h2>
            <span>
                { message }
            </span>
        </div>
    );
}

export default Message;