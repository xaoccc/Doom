import Girl from "../components/Girl"
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import api from '../api';

export default function Girls() {
    const [Girls, setGirls] = useState([]);
    const [pages, setPages] = useState([]);
    const [displayedGirls, setDisplayedGirls] = useState([]);
    const ITEMS_PER_PAGE = 6;
    const [searchParams] = useSearchParams();


    useEffect(() => {
        getGirls();
    }, [Girls]);

    const getGirls = async () => {
        api.get("/api/girls/")
            .then((response) => {
                const p = [];
                for (let i = 0; i < Math.ceil(response.data.length / ITEMS_PER_PAGE); i++) {
                    p.push(i + 1);
                }
                setPages(p);
                setGirls(response.data);
            })
            .catch((error) => console.error(`Error: ${error}`));;
    }

    useEffect(() => {
        const page = parseInt(searchParams.get('page')) || 1;
        const startIndex = (page - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        setDisplayedGirls(Girls.slice(startIndex, endIndex));
    }, [Girls, searchParams]);


    return (
        <section className="girls" id="girls">
            <div className="container">
                <div className="row">
                    <h2 className="section-title">Girls</h2>
                </div>
                <div className="center-xs girls-container">
                    {displayedGirls.map((girl, index) => <Girl key={index} girl={girl} />)}
                </div>
                {
                    localStorage.getItem('admin') === 'true' && (
                        <div className="adminPanel">
                            <Link className="addEvent button" to="/girls/create">Add Girl</Link>
                        </div>
                    )
                }
            </div>
            <div className="pagination-wrapper">
                {pages.map((page, index) => <Link key={index} to={`/girls?page=${page}`}>{page}</Link>)}
            </div>
        </section>

    )
}