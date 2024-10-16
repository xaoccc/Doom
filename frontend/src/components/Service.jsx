import api from '../api';
import { useNavigate } from "react-router-dom";

export default function Service({ service }) {

    const navigate = useNavigate();

    const onDelete = async (id) => {
        api.delete(`/api/services/${id}/`)
          .then((res) => {
            if (res.status === 204) {
              console.log("Service deleted successfully!");
            //   This app should have been SPA, but in some cases it's easier to reload pages
              location.reload();
            } else {
              console.log("Service was not deleted!");
            }
          })
          .catch((error) => console.error(`Error: ${error}`));    
      }

    return (
        <div className="service">
            <img src={service.imageUrl} className="icon icon service-img" /><br />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {
                localStorage.getItem('admin') === 'true' && (
                    <>
                        <button className="delete-button" onClick={() => onDelete(service.pk)}>Delete</button>
                        <button className="edit-button" onClick={() => navigate(`/services/edit/${service.pk}`)} >Edit</button>
                    </>
                )
            }

        </div>
    )
}