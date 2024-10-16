import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function EditService() {

    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();
    const { serviceId } = useParams();

    
  
    const editService = async (e) => {
      e.preventDefault();
      api.post("/api/services/create/", { imageUrl, title, description })
        .then((res) => {
          if (res.status === 201) {
            console.log("Service updated successfully!");
            navigate('/services/');
  
          } else {
            console.log("Service was not updated!");
          }
  
        })
        .catch((error) => console.error(`Error: ${error}`));
  
    }
    return (

        <>
            <h2 className="create-note-heading">Create Service</h2>
            <form onSubmit={editService} className="form-container">
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
                <label htmlFor="description">Title:</label>
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
                <input type="submit" value="Submit" />
            </form>
        </>

    )
}