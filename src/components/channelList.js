import React, { useState } from 'react';
import CreateChannel from './createChannel'; // Assuming the correct filename
import { Link } from 'react-router-dom';

const ChannelList = () => {
  const [channels, setChannels] = useState(['General', 'Random']);

  const addChannel = (channelName) => {
    setChannels((prevChannels) => [...prevChannels, channelName]);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Channels</h2>
      <CreateChannel onAddChannel={addChannel} />
      <ul style={styles.channelList}>
        {channels.map((channel, index) => (
          <li key={index} style={styles.channelItem}>
            <span style={styles.arrow}>&rarr; </span>
            <Link to={`/channels/${channel}`} style={styles.channelLink}>
              {channel}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: 'auto',
    padding: '10px',
    align: 'left',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '15px',
  },
  channelList: {
    listStyle: 'none',
    padding: '0',
    
  },
  channelItem: {
    marginBottom: '10px',
  },
  channelLink: {
    textDecoration: 'none',
    color: '#57aaa0',
    fontSize: '20px',
    align:'left',
  },
};

export default ChannelList;
