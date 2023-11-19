import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SendMessage = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={style.input}
      />
      <button type="submit" style={style.button}>Send</button>
    </form>
  );
};
const style={
button: {
  marginLeft: '10px',
  padding: '10px',
  backgroundColor: '#57aaa0',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '3px',
},
input: {
  width:'1150px',
  flex: '1',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ddd',
  borderRadius: '3px',
},
}
SendMessage.propTypes = {
    onSendMessage: PropTypes.func.isRequired
  };

export default SendMessage;
