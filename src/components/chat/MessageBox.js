import React, { Component } from 'react';

import MessageForm from './MessageForm';
import MessageList from './MessageList';

class MessageBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    fetchMessages() {
        if (!this.props.url) return;

        fetch(this.props.url)
            .then(messages => this.setState({ messages }))
            .catch(err => console.error(err));
    }

    displayNewMessage(message) {
        var messages = [...this.state.messages, message];
        this.setState({ messages });
    }

    handleMessageSubmit(message) {

    }

    render() {
        return (
            <div className="messageBox">
                <MessageList data={this.state.data} />
                <MessageForm onMessageSubmit={this.handleMessageSubmit} />
            </div>
        );
    }
}

export default MessageBox;