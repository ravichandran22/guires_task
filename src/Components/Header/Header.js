import React from 'react';
import logo from "../../Images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Header.css';


const Header = () => {
  return (
    <>
    <div className='announcementBar'>
      <div className='contact-details'>
        <ul>
          <li><span><FontAwesomeIcon icon={faPhone} /></span>1234567890</li>
          <li><span><FontAwesomeIcon icon={faPhone} /></span>1234567890</li>
          <li><span><FontAwesomeIcon icon={faEnvelope} /></span>example123@gmaol.com</li>

        </ul>
      </div>
      <div className='contactUs'>
        <p>Contact Us | Insights</p>
      </div>
    </div>
    <header style={headerStyle}>
      <div className="logo">
        <img src={logo} />
      </div>
      <nav>
        <ul style={navStyle}>
          <li><a href="/" style={linkStyle}>Service</a></li>
          <li><a href="#" style={linkStyle}>About Us</a></li>
          <li><a href="#" style={linkStyle}>Our Quality</a></li>
          <li><a href="#" style={linkStyle}>Industries</a></li>
          <li><a href="#" style={linkStyle}>Pricing</a></li>
          <li><a href="#" style={linkStyle}>Academy</a></li>
        </ul>
      </nav>
      <div>
      <span style={{paddingRight: '10px'}}><FontAwesomeIcon icon={faMagnifyingGlass} /></span><button style={buttonStyle}>For Enquire</button>
      </div>
    </header>
    </>
  );
}

export default Header;

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    color: 'white',
    paddingLeft: '15px',
    paddingRight: '15px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };

  const navStyle = {
    listStyle: 'none',
    display: 'flex',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 1rem',
  };

  const buttonStyle = {
    padding: '11px 20px',
    backgroundColor: '#bb2424',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    letterSpacing: '2px'
  };
