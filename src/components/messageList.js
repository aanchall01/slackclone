import React from 'react';
import PropTypes from 'prop-types';

const MessageList = ({ messages }) => {
  return (
    <div style={styles.container}>
      <ul style={styles.messageList}>
        {messages.map((message, someindex) => (
          <li
            key={someindex}
            style={
              message.sender === 'User'
                ? styles.myMessageContainer
                : styles.friendMessageContainer
            }
          >
            <div
              style={
                message.sender === 'User'
                  ? styles.myMessageContent
                  : styles.friendMessageContent
              }
            >
              {/* Conditionally rendering the sender's name */}
              {message.sender !== 'User' && <strong>{message.sender}: </strong>}
              {message.content}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxHeight: '400px',
    overflowY: 'auto',
  },
  messageList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  friendMessageContainer: {
    textAlign: 'left',
    marginBottom: '10px',
  },
  friendMessageContent: {
    backgroundColor: '#ece5dd',
    padding: '8px',
    borderRadius: '10px',
    display: 'inline-block',
    maxWidth: '70%',
    fontSize: '18px',  
  },
  myMessageContainer: {
    textAlign: 'right',
    marginBottom: '10px',
  },
  myMessageContent: {
    backgroundColor: '#57aaa0',
    padding: '8px',
    borderRadius: '10px',
    display: 'inline-block',
    maxWidth: '70%',
    fontSize: '18px', 
  },
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MessageList;
