import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

export default function Header() {

  const [isActive, setIsActive] = useState(false);
  const elementRef = useRef(null);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (elementRef.current && !elementRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fade-in">
      <div className="navigation-bar flex middle-xs">
        <img src="../../public/images/icon.png" className="logo" />
        <nav className="end-xs">
          <button className="menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
          <ul ref={elementRef} className={isActive ? 'nav-bar-mobile' : 'nav-bar-desktop'}>
            <li><Link to="/">About us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/contactus">Contact</Link></li>
            <li><Link to="/logout">Log Out</Link></li>
          </ul>
        </nav>

      </div>
      <div className="hero flex middle-xs">
        <div className="hero-text ">
          <h1>Welcome to Club Doom, {`${localStorage.getItem('email').split('@')[0]}`}!</h1>
          <p>A place to meet all your sins</p>
        </div>
      </div>
    </header>
  )
}