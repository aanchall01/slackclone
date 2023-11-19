import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './Searchbar'; 

const UserList = () => {
  const [users] = useState(['Alice', 'Bob', 'Charlie']);
  const [searchTerm, setSearchTerm] = useState('');


  const filteredUsers = users.filter(user =>
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <SearchBar onSearch={setSearchTerm} />
      
      <ul style={styles.userList}>
        {filteredUsers.map((user, index) => (
          <li key={index} style={styles.userItem}>
            <Link to={`/direct/${user}`} style={styles.userLink}>
              <div style={styles.userAvatar}>{user.charAt(0)}</div>
              <div style={styles.userInfo}>
                <div style={styles.userName}>{user}</div>
              </div>
              <div style={styles.timestamp}>12:30 PM</div>
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
    //margin: 'auto',
    padding: '20px',
    //border: '1px solid #ccc',
    //borderRadius: '8px',
  },
  
  userList: {
    listStyle: 'none',
    padding: '0',
  },
  userItem: {
    marginBottom: '10px',
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  userLink: {
    textDecoration: 'none',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userAvatar: {
    width: '40px',
    height: '40px',
    backgroundColor: '#57aaa0',
    color: '#fff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '15px',
    fontWeight: 'bold',
  },
  userInfo: {
    flex: '1',
  },
  userName: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  
  timestamp: {
    fontSize: '12px',
    color: '#888',
  },
};

export default UserList;
