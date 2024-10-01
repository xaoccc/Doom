import '../../public/styles/normalize.min.css'
import '../../public/styles/flexboxgrid.css'
import '../../public/styles/theme.css'

export default function Header() {

  function getUser() {
    return localStorage.getItem('login');
  }
  console.log(getUser());


  return (
    <header className="fade-in">
      <div className="navigation-bar flex middle-xs">
        <img src="../../public/images/icon.png" className="logo" />
        <nav className="end-xs">
          <ul>
            <li><a href="#about-us">About us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#contact">Contact</a></li>
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