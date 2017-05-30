import React, { Component } from 'react';

class MessageForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author: '',
            text: ''
        }
    }

    handleTextChange(e) {
        let text = e.target.value;
        this.setState({ text });
    }

    handleSubmit(e) {
        e.preventDefault();

        let author = this.state.author.trim();
        let content = this.state.text.trim();

        if (!content) return;

        let dateTime = new Date();
        dateTime = dateTime.toISOString();

        this.props.onMessageSubmit({
            username,
            content,
            dateTime,
            room
        });

        this.setState({
            author: '',
            text: ''
        });
    }

    render() {
        return (
            <form
                className="message-form"
                onSubmit={this.handleSubmit}
            >
                <input
                    placeholder="Say something..."
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <input
                    type="submit"
                    value="Post"
                />
            </form>
        );
    }
}

export default MessageForm;