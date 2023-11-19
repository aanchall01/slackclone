import React, { createContext, useState, useCallback } from 'react';

export const NotificationContext = createContext();

// Function to format date
const formatDate = (date) => {
  return date.toLocaleString();
};

// Initial notifications with detailed structure
const initialNotifications = [
  { id: 1, message: "Welcome to the app!", timestamp: new Date() },
  { id: 2, message: "Remember to check out the latest updates.", timestamp: new Date() },
  { id: 3, message: "You have 3 new messages.", timestamp: new Date() }
];

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const addNotification = useCallback((notification) => {
    const newNotification = {
      id: notifications.length + 1,
      message: notification,
      timestamp: new Date()
    };
    setNotifications(prevNotifications => [...prevNotifications, newNotification]);
  }, [notifications]);

  const removeNotification = useCallback((notificationId) => {
    setNotifications(prevNotifications => prevNotifications.filter(n => n.id !== notificationId));
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      <div style={styles.container}>
        {children}
      </div>
    </NotificationContext.Provider>
  );
};

const styles = {
  container: {
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
    maxWidth: '80%',
    fontFamily: '"Times New Roman", serif',
    color: '#333',
    lineHeight: '1.6',
  },
  notification: {
    borderBottom: '1px solid #ddd',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  message: {
    fontSize: '16px',
  },
  timestamp: {
    fontSize: '14px',
    color: '#888',
  },
};

export default NotificationProvider;
