import React from 'react';

class LogoutBtn extends React.Component {
  handleClick = () => {
    // Make request to log out user and handle successful response
  };

  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      // Close any open modals
    }
  };

  handleClickBackdrop = (event) => {
    if (event.target === event.currentTarget) {
      // Close any open modals
    }
  };

  render() {
    return (
      <button onClick={this.handleClick}>Logout</button>
    );
  }
}

export default LogoutBtn;