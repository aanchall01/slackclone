import React, { useContext } from 'react';
import { NotificationContext } from './notification';

const NotificationsPage = () => {
  const { notifications } = useContext(NotificationContext);

  return (
    <div>
      <h1 style={styles.heading}>Notifications</h1>
      <ul>
        {notifications.map((notification, index) => (
          <li
          key={index}
          style={{
            ...styles.notificationItem,
            ...(index < notifications.length - 3 ? styles.unseen : {}), // Adjust the condition based on your logic
          }}>{notification}</li>
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
}
export default NotificationsPage;
