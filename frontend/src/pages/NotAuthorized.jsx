import { Link } from 'react-router-dom'
import '../../public/styles/notfound.css'


export default function NotFound() {
  return (
    <div className='not-found-wrapper'>
      <h1>403</h1>
      <div className="cloak__wrapper">
        <div className="cloak__container">
          <div className="cloak"></div>
        </div>
      </div>
      <div className="info">
        <h2>Forbidden</h2>
        <p>The contents you are trying to access is available only for the admins.</p>
        <Link to="/" target="_blank" >Home</Link>
      </div>
    </div>
  );
}