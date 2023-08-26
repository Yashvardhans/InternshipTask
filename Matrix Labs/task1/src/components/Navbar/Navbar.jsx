import React , {useState}from 'react';
import icon from './images/icon.svg';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
      
     const toggleMobileMenu = () => {
          setMobileMenuOpen(!isMobileMenuOpen);
        };
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className="nav-header">
          <img src={icon} alt="" className='nav-icon' />
          <span className='brand-name'>nFTify</span>
        </div>
        <div className="nav-links">
          <Link to='/token'>
            <Icon icon="ic:baseline-token" color="white" width="24" height="24" className='nav-link-icon' />
            <div className="link-text">Token Address</div>
          </Link>
          <Link to="/pair">
            <Icon icon="fluent:pair-20-filled" color="white" width="24" height="24" className='nav-link-icon' />
            <div className="link-text">Pair Address</div>
          </Link>
        </div>
        <div className="social-links">
            <Icon className='social-icon' icon="ant-design:facebook-filled" color="#F30050" width="24" height="24" />
            <Icon className='social-icon' icon="mdi:linkedin" color="#F30050" width="24" height="24" />
            <Icon className='social-icon' icon="mdi:twitter" color="#F30050" width="24" height="24" />

        </div>
      </div>
      <div className={`mobile-navbar ${isMobileMenuOpen ? 'open' : ''}`}>
        {isMobileMenuOpen ? (
          <Icon className='hamburger-icon' icon="ic:baseline-cancel" width="24" height="24" onClick={toggleMobileMenu} />
        ) : (
          <Icon icon="ic:baseline-menu" className="hamburger-icon" width="24" height="24" onClick={toggleMobileMenu} />
        )}
        <span className='mobile-brand-name'>nFTify</span>
        <button className='connect-button'>Connect</button>
      </div>

      
      {isMobileMenuOpen && (
        <div className='mobile-menu-links'>
          <Link to='/token' onClick={toggleMobileMenu}>Token Address</Link>
          <Link to='/pair' onClick={toggleMobileMenu}>Pair Address</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
