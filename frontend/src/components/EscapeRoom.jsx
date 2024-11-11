import { useNavigate } from "react-router-dom"

export default function EscapeRoom({ escapeRoom }) {
    const navigate = useNavigate();
    return (
        <section className="escape-room" id="escape-room">
            <h3 className="section-title">{escapeRoom.name}</h3>
            <img className="icon icon service-img" src={escapeRoom.imageUrl} alt="" />
            <p>{escapeRoom.description}</p>
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