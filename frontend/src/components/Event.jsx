import api from '../api';
import { useNavigate } from "react-router-dom";

export default function Event({ event }) {

    const navigate = useNavigate();

    const onDelete = async (id) => {
        api.delete(`/api/events/${id}/`)
          .then((res) => {
            if (res.status === 204) {
              console.log("Event deleted successfully!");
            //   This app should have been SPA, but in some cases it's easier to reload pages
              location.reload();
            } else {
              console.log("Event was not deleted!");
            }
          })
          .catch((error) => console.error(`Error: ${error}`));    
      }

    return (
        <div className="service">
            <img src={event.imageUrl} className="icon icon service-img" /><br />
            <h3>{event.title}</h3>
            <a className='button' href='#'>More</a>
            {
                localStorage.getItem('admin') === 'true' && (
                    <>
                        <button className="delete-button" onClick={() => onDelete(event.pk)}>Delete</button>
                        <button className="edit-button" onClick={() => navigate(`/events/edit/${event.pk}`)} >Edit</button>
                    </>
                )
            }

        </div>
    )
}