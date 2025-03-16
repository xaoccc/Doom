import { useNavigate, Link } from "react-router-dom"

import api from "../api"

export default function Girl({ girl }) {
    const navigate = useNavigate();
    const onDelete = async (id) => {

        api.delete(`/api/girls/${id}/`)
            .then(response => {
                if (response.status === 204) {
                    console.log("Girl deleted successfully!");
                    navigate('/girls/', { replace: true });
                } else {
                    console.log("Girl was not deleted!");
                }
            })
            .catch(error => console.error(`Error: ${error}`));

    }
    return (
        <div className="girl" id="girl">
            <h3 className="section-title">{girl.name}</h3>
            <img className="icon icon service-img" src={girl.image} onClick={() => navigate(`/girls/${girl.id}`)} alt={girl.name} />
            <p>{girl.bio}</p>
            <Link className='button' to={`/girls/${girl.id}`}>More</Link>
            {
                localStorage.getItem('admin') === 'true' && (
                    <>
                        <button className="delete-button" onClick={() => onDelete(girl.id)}>Delete</button>
                        <button className="edit-button" onClick={() => navigate(`/girls/edit/${girl.id}`)} >Edit</button>
                    </>
                )
            }
        </div>
    )
}