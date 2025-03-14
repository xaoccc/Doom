import EscapeRoom from "../components/EscapeRoom"
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import api from '../api';

export default function EscapeRooms() {
    const [escapeRooms, setEscapeRooms] = useState([]);
    const [pages, setPages] = useState([]);
    const [displayedRooms, setDisplayedRooms] = useState([]);
    const ITEMS_PER_PAGE = 6;
    const [searchParams] = useSearchParams();
    

    useEffect(() => {
        getEscapeRooms();
    }, [escapeRooms]);

    const getEscapeRooms = async () => {
        api.get("/api/escaperooms/")
        .then((response) => {
            const p = [];
            for (let i = 0; i < Math.ceil(response.data.length / ITEMS_PER_PAGE); i++) {
                p.push(i + 1);                    
            }
            setPages(p);                  
            setEscapeRooms(response.data);
        })
        .catch((error) => console.error(`Error: ${error}`));;
    }

    useEffect(() => {
        const page = parseInt(searchParams.get('page')) || 1;
        const startIndex = (page - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;       

        setDisplayedRooms(escapeRooms.slice(startIndex, endIndex));
      }, [escapeRooms, searchParams]);


    return (
        <section className="escape-rooms" id="escape-rooms">
            <div className="container">
                <div className="row">
                    <h2 className="section-title">Escape Rooms</h2>
                </div>
                <div className="center-xs rooms-container">
                    {displayedRooms.map((escapeRoom, index) => <EscapeRoom key={index} escapeRoom={escapeRoom} />) }
                </div>
                {
                    localStorage.getItem('admin') === 'true' && (
                        <div className="adminPanel">
                            <Link className="addEvent button" to="/escape-rooms/create">Add Escape Room</Link>
                        </div>
                    )
                }
            </div>
            <div className="pagination-wrapper">
                {pages.map((page, index) => <Link key={index} to={`/escape-rooms?page=${page}`}>{page}</Link>)}
            </div>
        </section>

                     )
}