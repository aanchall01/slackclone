
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreateChannel = ({ onAddChannel }) => {
  const [channelName, setChannelName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (channelName.trim()) {
      onAddChannel(channelName);
      setChannelName('');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create Channel</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Channel Name"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
          style={styles.input}
          aria-label="Channel Name"
        />
        <button type="submit" style={styles.button}>
          Create
        </button>
      </form>
    </div>
  );
};

CreateChannel.propTypes = {
  onAddChannel: PropTypes.func.isRequired,
};

const styles = {
  container: {
    //position: 'fixed',
    //top:'100px',
   // right:'10px',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    //backgroundColor: '#f4f4f4',
    //border: '1px solid #ddd',
    //borderRadius: '5px',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '3px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#57aaa0',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '3px',
  },
};

export default CreateChannel;
