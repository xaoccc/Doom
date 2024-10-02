import { Link } from 'react-router-dom'

export default function HeaderNoUser() {
  return (
    <header className="fade-in">
      <div className="navigation-bar flex middle-xs">
        <img src="../../public/images/icon.png" className="logo" />
        <nav className="end-xs">
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
      </div>
      <div className="hero flex middle-xs">
        <div className="hero-text ">
          <h1>Welcome to Club Doom, visitor!</h1>
          <p>A place to meet all your sins</p>
        </div>
      </div>
    </header>
  )
}