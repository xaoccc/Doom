import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import api from "../api"

export default function EscapeRoom({ escapeRoom }) {
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    const textStyle = {
        overflow: isExpanded ? "visible" : "hidden",
        maxHeight: isExpanded ? "unset" : "9.5em",
        WebkitBoxOrient: isExpanded ? "unset" : "vertical",
        display: "-webkit-box",
        WebkitLineClamp: isExpanded ? "unset" : "5",
    };

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
        <div className="escape-room" id="escape-room">
            <h3 className="section-title">{escapeRoom.name}</h3>
            <img className="icon icon service-img" src={escapeRoom.imageUrl} onClick={() => navigate(`/escape-rooms/${escapeRoom.id}`)} alt="" />
            <p className="expand" style={textStyle} onClick={toggleExpand}>{escapeRoom.description}</p>
            <Link className='button' to={`/escape-rooms/${escapeRoom.id}`}>More</Link>
            {
                localStorage.getItem('admin') === 'true' && (
                    <>
                        <button className="delete-button" onClick={() => onDelete(escapeRoom.id)}>Delete</button>
                        <button className="edit-button" onClick={() => navigate(`/escape-rooms/edit/${escapeRoom.id}`)} >Edit</button>
                    </>
                )
            }
        </div>
    )
}