/* eslint-disable react/prop-types */
import '../styles/header.css';
import Navbar from './Navbar';

function Header({ onSignUpClick }) {
    return(
        <>
        <div className="headerBar">
            <h1 className='displayName'>Super Sweets</h1>

            <Navbar onSignUpClick={onSignUpClick} />
            
        </div>
        </>
    )
}

export default Header;