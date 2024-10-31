import React, { useState, useEffect } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function EditEvent() {

    // First we define our state variables and the setter functions so we can get our data
    const navigate = useNavigate();
    const { eventId } = useParams();
    const [events, setEvents] = useState([]);

    // Fields to update
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        getEvents();
    }, []);

    // We need to get the events so we can find the current event and populate the form with the current data
    useEffect(() => {
        const eventToUpdate = events.find(event => event.id == eventId);

        if (eventToUpdate) {
            setImageUrl(eventToUpdate.imageUrl);
            setDescription(eventToUpdate.description);
            setLocation(eventToUpdate.location);
            setTitle(eventToUpdate.title);
            setDate(eventToUpdate.date);
            setTime(eventToUpdate.time);
            setPrice(eventToUpdate.price);
        }
    }, [events, eventId]);

    const getEvents = async () => {
        api.get("/api/events/", { headers: { 
            'ngrok-skip-browser-warning': 'true' }
         })
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => console.error(`Error: ${error}`));
    }

    // Make a PUT request to the API to update the event
    const editEvent = async (e) => {
        e.preventDefault();
        const requestData = { imageUrl, description, location, title, date, time, price };
        console.log("Request Data:", requestData);
        api.put(`/api/events/${eventId}/`, requestData)
            .then((res) => {
                if (res.status === 200) {
                    console.log("Event updated successfully!");
                    navigate('/events/');
                } else {
                    console.log("Event was not updated!");
                }
            })
            .catch((error) => console.error(`Error: ${error}`));
    }
    return (
        <div>
            <h2 className="crud-title">Edit Event</h2>
            <form className="form-container" onSubmit={editEvent}>
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
                {(description) ? null : <small className="error">This field is required</small>}
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    className="form-input"
                    id="date"
                    name="date"
                    required
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
                {(date) ? null : <small className="error">This field is required</small>}
                <label htmlFor="time">Time:</label>
                <input
                    type="time"
                    className="form-input"
                    id="time"
                    name="time"
                    required
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
                />
                {(time) ? null : <small className="error">This field is required</small>}
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
                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    className="form-input"
                    id="location"
                    name="location"
                    required
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                />
                {(location) ? null : <small className="error">This field is required</small>}


                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}