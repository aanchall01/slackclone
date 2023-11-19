import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [gmail, setGmail] = useState('');
  const [newPassword, setNewPassword] = useState(''); // New state for new password
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup with: ', username, newPassword, confirmPassword, gmail);
    navigate('/login');
  };

  // Inline styles
  const inputStyle = {
    marginBottom: '10px',
    padding: '8px',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px',
    fontSize: '18px',
    backgroundColor: '#ffffff',
    color: 'black',
    cursor: 'pointer',
    width: '50%'
  };

  const formStyle = {
    maxWidth: '300px',
    margin: '0 auto',
  };

  const imageStyle = {
    width: '400px', 
    height: 'auto', 
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: '50px',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto', 
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#f8f8f8',
  
  
    position: 'absolute', 
    top: '50%',
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
  
  
    height: 'auto',
    maxHeight: '100vh', 
    overflowY: 'auto', 
  };
  return (
    <div style={containerStyle}>
      <div>
       
        <img src="/login.jpg" alt="6811265" style={imageStyle} />
      </div>
      <div style={formStyle}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <input
            type="text"
            placeholder="Gmail"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            style={inputStyle}
          />
           <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={inputStyle}
        />
        
        <button type="submit" style={buttonStyle}>
          Signup
        </button>
      </form>
      </div>
    </div>
  );
};

export default Signup;
