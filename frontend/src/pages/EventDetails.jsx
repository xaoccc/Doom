import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import api from '../api';

export default function EventDetails() {
    const eventId = useParams().eventId;
    let [events, setEvents] = useState([]);
    let [time, setTime] = useState("");
    let [currentEvent, setCurrentEvent] = useState({});

    useEffect(() => {
        getEvents();
    }, []);

    useEffect(() => {
        const eventToUpdate = events.find(event => event.id == eventId);
        if (eventToUpdate) {
            setCurrentEvent(eventToUpdate);
            setTime(eventToUpdate.time.slice(0, 5));
        }
    }, [events, eventId]);

    const getEvents = async () => {
        api.get("/api/events/")
            .then((response) => setEvents(response.data))
            .catch((error) => console.error(`Error: ${error}`));
    }

    const onPurchase = async (event) => {
        console.log("Purchased ticket for event with id:", event);
    }

    return (
        <div className="container">
            <div className="event-details flex margin-top">
                <h1>{currentEvent.title} in {currentEvent.location}!</h1>
                <h3>{currentEvent.date} @ {time}</h3>
                <img src={currentEvent.imageUrl} className="icon event-details-img" /><br />
                <h3>Price: {currentEvent.price} EUR</h3>
                <p>{currentEvent.description}</p>
                <button className="purchase-btn margin-bottom" onClick={() => onPurchase(currentEvent)}>Buy Ticket</button>
            </div>
        </div>
    )
}