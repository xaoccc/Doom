export default function Service({ service, onDelete }) {
    return (
        <div className="service">
            <img src={service.imageUrl} className="icon icon service-img" /><br />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="delete-button" onClick={() => onDelete(service.id)}>Delete</button>
            <button  className="edit-button" onClick={() => nav(`/edit-service/${service.id}`, { state: { service } })} >Edit</button>
        </div>
    )
}