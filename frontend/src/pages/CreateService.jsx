import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function CreateService() {

    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();
  
    const createService = async (e) => {
      e.preventDefault();
      api.post("/api/services/create/", { imageUrl, title, description })
        .then((res) => {
          if (res.status === 201) {
            console.log("Service added successfully!");
            navigate('/services/');
  
          } else {
            console.log("Service was not created!");
          }
  
        })
        .catch((error) => console.error(`Error: ${error}`));
  
    }
    return (

        <>
            <h2 className="crud-title">Create Service</h2>
            <form onSubmit={createService} className="form-container">
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
                {(title) ? null : <small className="error">This field is required</small>}
                <label htmlFor="description">Description:</label>
                <textarea
                    className="form-input"
                    id="description"
                    name="description"
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                {(title) ? null : <small className="error">This field is required</small>}
                <input type="submit" value="Submit" />
            </form>
        </>

    )
}