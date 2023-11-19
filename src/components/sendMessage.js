import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SendMessage = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSendMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input 
        type="text" 
        placeholder="Type a message..." 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        style={styles.input} 
      />
      <button type="submit" style={styles.button}>Send</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    padding: '15px',  // Increased padding
    borderTop: '1px solid #ddd',
  },
  input: {
    flex: 1,
    padding: '15px',  // Increased padding
    fontSize: '18px', // Increased font size
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginRight: '10px',
  },
  button: {
    padding: '15px 20px',  // Increased padding
    fontSize: '18px', // Increased font size
    backgroundColor: '#57aaa0',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

SendMessage.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
};

export default SendMessage;
