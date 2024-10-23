import { useNavigate } from 'react-router-dom';
import api from '../api';
import { useState } from 'react';

export default function CreateEvent() {
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();
  
    const createService = async (e) => {
      e.preventDefault();
      api.post("/api/events/create/", { imageUrl, title, description, date, time, price, location })
        .then((res) => {
          if (res.status === 201) {
            console.log("Event added successfully!");
            navigate('/events/');
  
          } else {
            console.log("Event was not created!");
          }
  
        })
        .catch((error) => console.error(`Error: ${error}`));
  
    }

    return (
        <div>
            <h2 className="create-note-heading">Create Event</h2>
            <form className="form-container" onSubmit={createService}>
                <label htmlFor="imageUrl">Image URL:</label>
                <input
                    className="form-input"
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    required
                    onChange={(e) => setImageUrl(e.target.value)}
                    value={imageUrl}
                />
                <label htmlFor="title">Title:</label>
                <input
                    className="form-input"
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="description">Description:</label>
                <textarea
                    className="form-input"
                    id="description"
                    name="description"
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <label htmlFor="date">Date:</label>
                <textarea
                    className="form-input"
                    id="date"
                    name="date"
                    required
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
                <label htmlFor="time">Time:</label>
                <textarea
                    className="form-input"
                    id="time"
                    name="time"
                    required
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
                />
                <label htmlFor="price">Price:</label>
                <textarea
                    className="form-input"
                    id="price"
                    name="price"
                    required
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
                <label htmlFor="location">Location:</label>
                <textarea
                    className="form-input"
                    id="location"
                    name="location"
                    required
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}