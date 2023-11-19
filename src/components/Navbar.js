import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={styles.nav}>
  
    <ul style={styles.navList}>
      
      <li style={styles.navItem}><Link to="/channels" style={styles.navLink}>Channels</Link></li>
      <li style={styles.navItem}><Link to="/users" style={styles.navLink}>Friends</Link></li>
      <li style={styles.navItem}><Link to="/notifications" style={styles.navLink}>Notifications</Link></li>
    </ul>
  </nav>
);

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px 0',
    width: '100%',
    height: '30px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'right',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
  },
};

export default Navbar;
