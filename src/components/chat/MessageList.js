import React from 'react';

function formatISOString(date){
    var date = new Date(date);
    var days = date.getDate();
    days = (days < 10) ? ("0" + days) : days;
    var months = date.getMonth() + 1;
    months = (months < 10) ? ("0" + months) : months;
    var hours = date.getHours();
    hours = (hours < 10) ? ("0" + hours) : hours;
    var minutes = date.getMinutes();
    minutes = (minutes < 10) ? ("0" + minutes) : minutes;

    var formattedDate =
        days + "/" + months + "/" + date.getFullYear() + " at " + hours + ":" + minutes;
    return formattedDate;
}

const MessageList = ({ messages }) => {
    var messageNodes = messages.map(message => {
        return (
            <Message
                author={message.username}
                key={message.id}
                dateTime={formatISOString(message.dateTime)}
            >
                {message.content}
            </Message
        );
    });

    return (
        <div className="message-list">
            {messageNodes}
        </div>
    );
}

export default MessageList;