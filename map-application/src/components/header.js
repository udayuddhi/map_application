import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
        <li style={{background:'linear-gradient(45deg,rgba(230, 14, 14,.5) , rgba(245, 245, 1,.5) )',width:'80px',paddingLeft:'21px',borderRadius:'5px'}}>login</li>
          <li style={{background:'linear-gradient(45deg,rgba(230, 14, 14,.5) , rgba(245, 245, 1,.5) )',width:'80px',paddingLeft:'15px',borderRadius:'5px'}}>Logout</li>
          <li><button><i class="fa-solid fa-user"></i></button></li>
          

        </ul>
      </nav>
    </header>
  );
};

export default Header;
