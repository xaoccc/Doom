
import { Link } from 'react-router-dom'
export default function Footer() {
  return (

    <footer>
      <div className="container">

        <div className="row margin-bottom-small">
          <div className="col-md-6">
            <h3>About us</h3>
            <p>We offer any kind of entertainment allowed by the human laws</p>
          </div>
          <div className="col-md-6">
            <h3>Links</h3>
            <ul>
              <li><Link to="/">About us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contactus">Contact</Link></li>
              <li><Link to="/logout">Log Out</Link></li>
            </ul>
          </div>
        </div>

      </div>
      <div className="row secondary-footer">
        <div className="col-md">
          <p>Club Doom © 2024</p>
        </div>
        <div className="col-md end-md">
          <p><a href="#">Imprint</a> | <a href="#">Data Protection</a></p>
        </div>
      </div>
    </footer>



  )
}