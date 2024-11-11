import EscapeRoom from "../components/EscapeRoom"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

export default function EscapeRooms() {
    const [escapeRooms, setEscapeRooms] = useState([]);

    useEffect(() => {
        getEscapeRooms();
    }, []);

    const getEscapeRooms = async () => {
        api.get("/api/escaperooms/")
        .then((response) => {
            setEscapeRooms(response.data);
        })
        .catch((error) => console.error(`Error: ${error}`));;
    }



    return (
        <section className="escape-rooms" id="escape-rooms">
            <div className="container">
                <div className="row">
                    <h2 className="section-title">Escape Rooms</h2>
                </div>
                <div className="rooms-container">
                    {escapeRooms.map((escapeRoom, index) => <EscapeRoom key={index} escapeRoom={escapeRoom} />) }
                </div>
                {
                    localStorage.getItem('admin') === 'true' && (
                        <div className="adminPanel">
                            <Link className="addEvent button" to="/escape-rooms/create">Add Escape Room</Link>
                        </div>
                    )
                }
            </div>
        </section>

                     )
}