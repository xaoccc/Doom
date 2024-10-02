import { Link } from 'react-router-dom'

export default function Header() {

  function getUser() {
    return localStorage.getItem('login');
  }

  return (
    <header className="fade-in">
      <div className="navigation-bar flex middle-xs">
        <img src="../../public/images/icon.png" className="logo" />
        <nav className="end-xs">
          <ul>
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