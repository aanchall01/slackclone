import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MessageList from './messageList';
import SendMessage from './sendMessage';

const sampleDirectMessages = {
  Alice: [
    { sender: 'Current User', content: 'Hi Alice!' },
    { sender: 'Alice', content: 'Hello there!' },
  ],
  Bob: [
    // Messages with Bob
  ],
  // More users and messages as needed
};

const DirectMessages = () => {
  const [messages, setMessages] = useState([]);
  const { userName } = useParams();

  useEffect(() => {
    setMessages(sampleDirectMessages[userName] || []);
  }, [userName]);

  const handleSendMessage = (newMessageContent) => {
    setMessages([...messages, { sender: 'Current User', content: newMessageContent }]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>{userName}</div>
      <div style={styles.chatBox}>
        <MessageList messages={messages} />
      </div>
      <SendMessage onSendMessage={handleSendMessage} />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1400px',
    margin: 'auto',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f4f4f4',
  },
  header: {
    padding: '15px',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#57aaa0',
    color: '#fff',
    fontSize: '22px',
    textAlign: 'left',
  },
  chatBox: {
    flex: 1,
    overflowY: 'scroll',
    padding: '15px',
  },
  
};

export default DirectMessages;
