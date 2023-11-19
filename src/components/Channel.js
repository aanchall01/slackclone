import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MessageList from './messageList';
import SendMessage from './sendMessage';

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
  const { channelName } = useParams();

  useEffect(() => {
    setMessages(sampleMessages[channelName] || []);
  }, [channelName]);

  const handleSendMessage = (newMessageContent) => {
    setMessages([...messages, { sender: 'Username', content: newMessageContent }]);
  };

  return (
    <div>
      <h3>Channel: {channelName}</h3>
      <MessageList messages={messages} />
      <SendMessage onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Channel;
