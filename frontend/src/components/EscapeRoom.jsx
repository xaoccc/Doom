import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import api from "../api"

export default function EscapeRoom({ escapeRoom }) {
    const navigate = useNavigate();
    const expandText = (e) => {
        if (e.target.style.overflow === "hidden") {
            e.target.style.overflow = "visible";
            e.target.style.maxHeight = "unset";
            e.target.style.webkitBoxOrient = "unset";
        } else {
            e.target.style.overflow = "hidden";
            e.target.style.maxHeight = "9.5em";
            e.target.style.webkitBoxOrient = "vertical";
        }
    }

    const onDelete = async (id) => {

        api.delete(`/api/escaperooms/${id}/`)
            .then(response => {
                if (response.status === 204) {
                    console.log("Escape Room deleted successfully!");
                    navigate('/escape-rooms/', { replace: true });
                } else {
                    console.log("Escape Room was not deleted!");
                }
            })
            .catch(error => console.error(`Error: ${error}`));

    }
    return (
        <section className="escape-room" id="escape-room">
            <h3 className="section-title">{escapeRoom.name}</h3>
            <img className="icon icon service-img" src={escapeRoom.imageUrl} onClick={() => navigate(`/escape-rooms/${escapeRoom.id}`)} alt="" />
            <p className="expand" onClick={expandText}>{escapeRoom.description}</p>
            <Link className='button' to={`/escape-rooms/${escapeRoom.id}`}>More</Link>
            {
                localStorage.getItem('admin') === 'true' && (
                    <>
                        <button className="delete-button" onClick={() => onDelete(escapeRoom.id)}>Delete</button>
                        <button className="edit-button" onClick={() => navigate(`/escape-rooms/edit/${escapeRoom.id}`)} >Edit</button>
                    </>
                )
            }
        </section>
    )
}