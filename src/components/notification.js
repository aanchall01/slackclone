import React, { createContext, useState, useCallback } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    "Welcome to the app!",
    "Remember to check out the latest updates.",
    "You have 3 new messages."
  ]);

  const addNotification = useCallback((notification) => {
    setNotifications(prevNotifications => [...prevNotifications, notification]);
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      <div style={styles.container}>
        {children}
      </div>
    </NotificationContext.Provider>
  );
};

const styles = {
  container: {
    maxWidth: '1400px',
    //margin: 'auto',
    //padding: '20px',
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    //borderRadius: '5px',
    //boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

export default NotificationProvider;
