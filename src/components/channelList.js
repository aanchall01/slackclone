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
      <div style={styles.contentContainer}>
        <div style={styles.channelListContainer}>
          <ul style={styles.channelList}>
            {channels.map((channel) => (
              <li key={channel} style={styles.channelItem}>
                <Link to={`/channels/${channel.toLowerCase()}`} style={styles.channelLink}>
                  {channel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div style={styles.createChannelContainer}>
          <CreateChannel onAddChannel={addChannel} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: 'auto',
    padding: '20px',
    maxWidth: '800px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '15px',
    textAlign: 'center',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between', // Space out channel list and create channel
  },
  channelListContainer: {
    flexGrow: 1, // Allow the channel list to take up available space
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
    fontSize: '18px',
  },
  createChannelContainer: {
    alignSelf: 'start', // Aligns the CreateChannel to the top
    marginLeft: '20px', // Space between channel list and create channel
    padding: '5px',
    backgroundColor: '#e8e8e8', // Subtle background color
    borderRadius: '5px', // Rounded corners
    fontSize: '14px', // Smaller font size for subtlety
  },
};

export default ChannelList;