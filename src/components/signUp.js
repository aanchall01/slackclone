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
    width: '400px', // Set the width of your image
    height: 'auto', // Maintain aspect ratio
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    minHeight: '100vh',
  };
  return (
    <div style={containerStyle}>
      <div>
        {/* Add your image source in the src attribute */}
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
