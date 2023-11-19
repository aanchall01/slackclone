import React , {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Signup from './components/signUp';
import Login from './components/login';
import ChannelList from './components/channelList';
import Channel from './components/Channel'; 
import UserList from './components/UserList';
import DirectMessages from './components/DirectMessage';
import Navbar from './components/Navbar';
import NotificationsPage from './components/NotificationsPage';
import { NotificationProvider } from './components/notification';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  

  return (
    <NotificationProvider>
    <Router>
      <div>
        {isLoggedIn && <Navbar />}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/channels" element={<ChannelList />} />
          <Route path="/channels/:channelName" element={<Channel />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/direct/:userName" element={<DirectMessages />} />
          <Route path="/notifications" element={<NotificationsPage />} />

        </Routes>

        
      </div>
    </Router>
    </NotificationProvider>
    
  );  

};
export default App;
