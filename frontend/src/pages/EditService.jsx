import React, { useState, useEffect } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function EditService() {

    // First we define our state variables and the setter functions so we can get our data
    const navigate = useNavigate();
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getServices();
    }, []);

    // We need to get the services so we can find the current service and populate the form with the current data
    useEffect(() => {
        const serviceToUpdate = services.find(service => service.pk == serviceId);

        if (serviceToUpdate) {
            setImageUrl(serviceToUpdate.imageUrl);
            setDescription(serviceToUpdate.description);
            setTitle(serviceToUpdate.title);
        }
    }, [services, serviceId]);

    const getServices = async () => {
        api.get("/api/services/")
            .then((response) => {
                setServices(response.data);
            })
            .catch((error) => console.error(`Error: ${error}`));
    }

    // Make a PUT request to the API to update the service
    const editService = async (e) => {
        e.preventDefault();
        const requestData = { imageUrl, title, description };
        console.log("Request Data:", requestData);
        api.put(`/api/services/${serviceId}/`, requestData)
            .then((res) => {
                if (res.status === 200) {
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
                <input type="submit" value="Update service" />
            </form>
        </>

    )
}