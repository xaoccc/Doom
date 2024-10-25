import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Event from '../components/Event';
import api from '../api';

export default function Events() {
    const [events, setEvents] = useState([]);
    const [displayedEvents, setDisplayedEvents] = useState([]);
    const ITEMS_PER_PAGE = 6;
    const [searchParams] = useSearchParams();

    useEffect(() => {
        getEvents();
    }, []);

    const getEvents = async () => {
        api.get("/api/events/")
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => console.error(`Error: ${error}`));;
    }

    useEffect(() => {
        const page = parseInt(searchParams.get('page')) || 1;
        const startIndex = (page - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;

        setDisplayedEvents(events.slice(startIndex, endIndex));
      }, [events, searchParams]);

    return (
        <main>
            <section className="blurbs" id="benefits">
                <div className="container">
                    <div className="row">
                        <div className="col-md center-xs">
                            <h2 className="section-title">Events</h2>
                        </div>
                    </div>
                    <div className="row margin-bottom-small center-xs events-container">
                        {displayedEvents.map((event, index) => <Event key={index} event={event} />)}
                    </div>
                    {
                        localStorage.getItem('admin') === 'true' && (
                            <div className="adminPanel">
                                <Link className="addEvent button" to="/events/create">Add Event</Link>
                            </div>
                        )
                    }
                </div>
                <div className="pagination-wrapper">
                        <Link to="/events?page=1">1</Link>
                        <Link to="/events?page=2">2</Link>
                </div>
            </section>
            <section className="newsletter">
                <div className="container">
                    <div className="row center-xs">
                        <div className="col-md ">
                            <h2>Our newsletter</h2>
                            <form className="flex center-xs">
                                <input placeholder="Enter Your Email" type="email" required="" name="" />
                                <button>SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    )
}