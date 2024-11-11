
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const [isAutorized, setIsAutorized] = useState(false);

  // Check if the user is logged in and listen for this on every route change
  useEffect(() => {
    const loginInfo = localStorage.getItem('login');
    if (loginInfo === 'true') {
        setIsAutorized(true);  
    } else {
        setIsAutorized(false);  
    }     
  }, [location.pathname])

  return (
    <footer>
      <div className="container">
        <div className="row margin-bottom-small">      
          { (isAutorized === true) ?  
            <div className="col-md-6">
              <h3>About us</h3>
              <p>We offer any kind of entertainment allowed by the human laws</p>
            </div> :
            <div className="col-md-12">
              <h3>About us</h3>
              <p className="centered">We offer any kind of entertainment allowed by the human laws</p>
              </div>
            }

          { (isAutorized === true) ?            
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
          : null }
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