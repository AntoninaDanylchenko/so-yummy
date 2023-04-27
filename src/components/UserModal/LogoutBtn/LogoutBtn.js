import React from 'react';
import LogoutButton from './LogoutBtn.styled';


const LogoutBtn = ({ onLogout }) => {
  const handleLogout = async () => {
      await fetch('/logout', {
        method: 'POST',
        credentials: 'include',
      });
      onLogout();
    
  };

  return (
    <LogoutButton onClick={handleLogout}>
      Logout
    </LogoutButton>
  );
};

export default LogoutBtn;