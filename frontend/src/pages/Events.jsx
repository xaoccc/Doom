import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Event from '../components/Event';
import api from '../api';

export default function Events() {
    const [events, setEvents] = useState([]);
    const [pages, setPages] = useState([]);
    const [displayedEvents, setDisplayedEvents] = useState([]);
    const ITEMS_PER_PAGE = 6;
    const [searchParams] = useSearchParams();

    useEffect(() => {
        getFutureEvents();
    }, []);

    const getFutureEvents = async () => {
        api.get("/api/events/", { headers: { 
            'ngrok-skip-browser-warning': 'true' }
         })
            .then((response) => {
                const futureEvents = response.data.filter(event => Date.parse(event['date']) >= Date.now());  
                const sortedEvents = futureEvents.sort((a, b) => Date.parse(a['date']) - Date.parse(b['date']));
                const p = [];
                for (let i = 0; i < Math.ceil(sortedEvents.length / ITEMS_PER_PAGE); i++) {
                    p.push(i + 1);                    
                }
                setPages(p);                  
                setEvents(sortedEvents);
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
                        <h2 className="section-title">Upcoming Events</h2>                        
                    </div>
                    <div className="row">
                        <Link className="section-title" to="/events-archive">Archive</Link>                        
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
                    {pages.map((page, index) => <Link key={index} to={`/events?page=${page}`}>{page}</Link>)}
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