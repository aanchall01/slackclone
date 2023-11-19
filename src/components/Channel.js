import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MessageList from './messageList';
import SendMessage from './sendMessage';
import SearchBar from './Searchbar';

// Sample data for testing
const sampleMessages = {
  general: [
    { sender: 'Alice', content: 'Hey everyone!' },
    { sender: 'Bob', content: 'Hello Alice!' },
  ],
  random: [
    { sender: 'Charlie', content: 'Did you see that game last night?' },
  ],
  // More channels and messages as needed
};

const Channel = () => {
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { channelName } = useParams();

  useEffect(() => {
    setMessages(sampleMessages[channelName.toLowerCase()] || []);
  }, [channelName]);

  const filteredMessages = messages.filter(message => 
    message.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = (newMessageContent) => {
    setMessages([...messages, { sender: 'User', content: newMessageContent }]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        Channel: {channelName}
        <div style={styles.searchBar}><SearchBar onSearch={setSearchTerm}  /></div>
      </div>
      <div style={styles.chatBox}>
        <MessageList messages={filteredMessages} />
      </div>
      <SendMessage onSendMessage={handleSendMessage} />
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    backgroundColor: '#f4f4f4',
    height: '100%',
  },
  header: {
    padding: '15px',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#57aaa0',
    color: '#fff',
    fontSize: '26px',  
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chatBox: {
    flex: 1,
    overflowY: 'auto',
    padding: '15px',
  },
  searchBar: {
    width: '150px', 
    marginRight: '15px', 
  },
 
};

export default Channel;
