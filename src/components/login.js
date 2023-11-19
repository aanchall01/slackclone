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
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    minHeight: '100vh',
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
    //padding: '10px',
    fontSize: '18px',
    //backgroundColor: '#3498db', // Different color for sign-up button
    color: 'black',
    cursor: 'pointer',
    width: '25%', // Set the width to 100% to make it full width
   // boxSizing: 'border-box',
    //marginTop: '5px', // Add margin to separate it from the login button
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
        <h2 fontFamily = 'Arial' >Login</h2>
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
