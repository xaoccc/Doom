import { useNavigate } from 'react-router-dom';
import api from '../api';
import { useState } from 'react';

export default function CreateEscapeRoom() {
    const [imageUrl, setImageUrl] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [duration, setDuration] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();
  
    const createEscapeRoom = async (e) => {
      e.preventDefault();    
      api.post("/api/escaperooms/create/", { imageUrl, name, description, difficulty, duration, price })
        .then((res) => {
          if (res.status === 201) {
            console.log("Escape Room added successfully!");
            navigate('/escape-rooms/');
  
          } else {
            console.log("Event was not created!");
          }
  
        })
        .catch((error) => console.error(`Error: ${error}`));
  
    }

    return (
        <div>
            <h2 className="crud-title">Create Escape Room</h2>
            <form className="form-container" onSubmit={createEscapeRoom}>
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
                {/^https?:\/\/\S+$/.test(imageUrl) ? '' : <small className="error">Enter a valid web address. It should start with http:// or https://</small>}
                <label htmlFor="name">Name:</label>
                <input
                    className="form-input"
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                {(name) ? null : <small className="error">This field is required</small>}
                <label htmlFor="description">Description:</label>
                <textarea
                    className="form-input"
                    id="description"
                    name="description"
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                {(description) ? null : <small className="error">This field is required</small>}
                <label htmlFor="difficulty">Difficulty:</label>
                <input
                    type="number"
                    min={1}
                    max={10}
                    className="form-input"
                    id="difficulty"
                    name="difficulty"
                    required
                    onChange={(e) => setDifficulty(e.target.value)}
                    value={difficulty}
                />
                {(difficulty) ? null : <small className="error">This field is required</small>}
                <label htmlFor="duration">Duration:</label>
                <input
                    type="number"
                    min={1}
                    max={300}
                    className="form-input"
                    id="duration"
                    name="duration"
                    required
                    onChange={(e) => setDuration(e.target.value)}
                    value={duration}
                />
                {(duration) ? null : <small className="error">This field is required</small>}
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    className="form-input"
                    id="price"
                    name="price"
                    required
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
                {/^\d+$/.test(price) ? '' : <small className="error">Enter a valid price.</small>}                
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}