import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login with: ', username, password);
    onLogin();
    navigate('/channels');
  };
  const handleSignupClick = () => {
    // Handle signup button click
    navigate('/signup');
  };

  // Inline styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Centers content horizontally in the container
    alignItems: 'center', // Centers content vertically in the container
    gap: '50px',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto', // Centers the container horizontally in the viewport
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#f8f8f8',
  
    // Additional styles for vertical centering
    position: 'absolute', // Use absolute positioning
    top: '50%', // Position the top edge of the container 50% down the viewport
    left: '50%', // Position the left edge of the container 50% across the viewport
    transform: 'translate(-50%, -50%)', // Offset the container to truly center it
  
    // Ensuring the content is always accessible
    height: 'auto',
    maxHeight: '100vh', // Maximum height to viewport height
    overflowY: 'auto', // Scroll if content overflows
  };
  

  const formStyle = {
    maxWidth: '300px',
    margin: '0 auto',
  };

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
    boxSizing: 'border-box',
    width: '50%',
  };
    
  const signupButtonStyle = {
    fontSize: '16px', // Adjusted font size
    backgroundColor: 'transparent', // Clear background
    color: '#3498db', // Blue color for emphasis
    width: '100%', // Full width for better visibility
    marginTop: '10px', // Added margin for separation
    textDecoration: 'bold', // Underline to indicate it's clickable
  };

  const headerStyle = {
    fontFamily: 'Arial, sans-serif', // Consistent font family
    color: '#333', // Darker color for better readability
    marginBottom: '20px', // Space before the form
  };
  const imageStyle = {
    width: '400px', // Set the width of your image
    height: 'auto', // Maintain aspect ratio
  };

  return (
    <div style={containerStyle}>
      <div>
        {/* Add your image source in the src attribute */}
        <img src="/login.jpg" alt="6811265" style={imageStyle} />
      </div>
      <div style={formStyle}>
      <h2 style={headerStyle}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Login
          </button>
          <h5>Don't have an account? Sign up.</h5>
          <button type="signup" style={signupButtonStyle} onClick={handleSignupClick}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
