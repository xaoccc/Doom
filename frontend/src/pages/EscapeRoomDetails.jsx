import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import api from '../api';



export default function EscapeRoomDetails() {
    const escapeRoomId = useParams().escapeRoomId;
    let [escapeRooms, setEscapeRooms] = useState([]);
    let [currentEscapeRoom, setCurrentEscapeRoom] = useState({});

    useEffect(() => {
        getEscapeRooms();
    }, []);

    useEffect(() => {
        const escapeRoomToFind = escapeRooms.find(escapeRoom => escapeRoom.id == escapeRoomId);
        if (escapeRoomToFind) {
            setCurrentEscapeRoom(escapeRoomToFind);
        }
    }, [escapeRooms, escapeRoomId]);

    const getEscapeRooms = async () => {
        api.get("/api/escaperooms/")
        .then((response) => setEscapeRooms(response.data))
        .catch((error) => console.error(`Error: ${error}`));
    }

    return (
        <div className="container">
            <div className="event-details flex margin-top">
                <h1>{currentEscapeRoom.name}</h1>
                <img src={currentEscapeRoom.imageUrl} className="icon event-details-img" /><br />
                <h3>Price: {currentEscapeRoom.price} EUR</h3>
                <p>{currentEscapeRoom.description}</p>
            </div>
        </div>

    )
}