export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md center-xs">
              <img src="./images/logo.png" className="margin-bottom"  />
            </div>
          </div>
          <div className="row margin-bottom-small">
            <div className="col-md-8">
              <h3>About us</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-md-4">
              <h3>Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about-us">About us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#why-us">Why us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          
        </div>
      </footer>

      <div className="row secondary-footer">
        <div className="col-md">
          <p>Club Doom © 2024</p>
        </div>
        <div className="col-md end-md">
          <p><a href="#">Imprint</a> | <a href="#">Data Protection</a></p>
        </div>
      </div>
    </>
  )
}