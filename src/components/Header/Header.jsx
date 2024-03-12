//src\components\Header\Header.jsx
import React from 'react';
import logo from '../../img/Logo.png';

function Header() {
  return (
    <header>
  
      <div className="container-header">
      <div className='logo'>
        <a href="../../../public/index.html">
           <img 
            src={logo}
            className="logo-img"
            alt="Логотип"
            width="104"
            height="26"/>
            </a>
    </div>
           <div className="header-btn-block">
          <button className="users-btn" type="button">
            Users
          </button>
          <button className="signup-btn" type="button">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
