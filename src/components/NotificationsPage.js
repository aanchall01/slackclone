import React, { useContext } from 'react';
import { NotificationContext } from './notification';

const NotificationsPage = () => {
  const { notifications, removeNotification } = useContext(NotificationContext);

  return (
    <div>
      <h1 style={styles.heading}><center>Notifications</center></h1>
      <ul>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            style={styles.notificationItem}>
            <span style={styles.message}>{notification.message}</span>
            <span style={styles.timestamp}>{notification.timestamp.toLocaleString()}</span>
            <span 
              style={styles.crossIcon} 
              onClick={() => removeNotification(notification.id)}
            >
              &#10005;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  heading: {
    fontSize: '22px',
    color: '#57aaa0',
    marginBottom: '17px',
  },
  notificationItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  message: {
    fontSize: '16px',
    flex: 1, // takes the maximum width
  },
  timestamp: {
    marginLeft: '10px',
    fontSize: '14px',
    color: '#888',
  },
  crossIcon: {
    marginLeft: '10px',
    cursor: 'pointer',
  },
  // ... other styles
};

export default NotificationsPage;
