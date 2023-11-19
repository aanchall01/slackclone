import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MessageList from './messageList';
import SendMessage from './sendMessage';
import SearchBar from './Searchbar'; 

const sampleDirectMessages = {
  Alice: [
    { sender: 'User', content: 'Hi Alice!' },
    { sender: 'Alice', content: 'Hello there!' },
  ],
  Bob: [],
 
};

const DirectMessages = () => {
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { userName } = useParams();

  useEffect(() => {
    setMessages(sampleDirectMessages[userName] || []);
  }, [userName]);

  const filteredMessages = messages.filter(message => 
    message.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = (newMessageContent) => {
    setMessages([...messages, { sender: 'User', content: newMessageContent }]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        {userName}
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
      height: '95%'
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
    searchBar: {
      width: '150px', 
      marginRight: '15px', 
    },
    chatBox: {
      flex: 1,
      overflowY: 'auto',
      padding: '15px',
    },
  };

  export default DirectMessages;
