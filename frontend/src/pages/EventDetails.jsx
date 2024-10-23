import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import api from '../api';

export default function EventDetails() {
    const eventId = useParams().eventId;
    let [events, setEvents] = useState([]);
    let [currentEvent, setCurrentEvent] = useState({});

    useEffect(() => {
        getEvents();
    }, []);

    useEffect(() => {
        const eventToUpdate = events.find(event => event.id == eventId);
        if (eventToUpdate) {
            setCurrentEvent(eventToUpdate);
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
            <div className="row">
                <div className="col-md-12 center-xs">
                    <h1>{currentEvent.title} in {currentEvent.location}!</h1>
                    <h3>{currentEvent.date} @ {currentEvent.formatted_time}</h3>
                </div>
            </div>
            <div className="row center-xs">                
                <img src={currentEvent.imageUrl} className="icon event-details-img" /><br />              
            </div>
            <div className="row center-xs">                
                <p>{currentEvent.description}</p>                  
            </div>
            <div className="row center-xs">                        
                <h3>Price: {currentEvent.price} EUR</h3>          
            </div>
            <div className="row center-xs">                
                <button className="purchase-btn" onClick={() => onPurchase(currentEvent)}>Buy Ticket</button>           
            </div>



        </div>
    )
}