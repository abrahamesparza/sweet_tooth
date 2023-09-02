/* eslint-disable react/prop-types */
import { useState } from 'react';

import '../styles/navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar({ onSignUpClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (e) => {
    e.preventDefault();
    
    let text = e.target.text;
    let cleanText = text.includes(' ') ? text.split(' ').join('') : text;
    let textToSend = cleanText.toLowerCase();

    onSignUpClick(textToSend)
  }

  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <ul className="navbar-items">
          <li>
            <div className="dropdown">
                <FontAwesomeIcon className="dropbtn" onClick={toggleDropdown} size='lg' icon={faBars} />
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <a href="/signup" onClick={handleOptionClick}>Sign Up</a>
                  <a href="/login" onClick={handleOptionClick}>Log In</a>
                  <a href="/explore" onClick={handleOptionClick}>Explore</a>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
