import React from 'react';
import Avatar from './ui/Avatar';
import Logo from './Logo';

import '../assets/css/header.css';

function Header () {
  return (
    <header className="header shadow-sm">
      <div className="container">
        <Logo />
        <Avatar />
      </div>
    </header>
  );
}

export default Header;