import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import api from '../api';

export default function GirlDetails() {
    const girlId = useParams().girlId;
    let [girls, setGirls] = useState([]);
    let [currentGirl, setCurrentGirl] = useState({});

    useEffect(() => {
        getGirls();
    }, []);

    useEffect(() => {
        const girlToUpdate = girls.find(girl => girl.id == girlId);
        if (girlToUpdate) {
            setCurrentGirl(girlToUpdate);
        }
    }, [girls, girlId]);

    const getGirls = async () => {
        api.get("/api/girls/", { headers: { 
            'ngrok-skip-browser-warning': 'true' }
         })
            .then((response) => setGirls(response.data))
            .catch((error) => console.error(`Error: ${error}`));
    }

    return (
        <div className="container">
            <div className="girl-details flex margin-top">
                <h1>{currentGirl.name}</h1>
                <img src={currentGirl.image} className="icon girl-details-img" /><br />
                <p>{currentGirl.bio}</p>
                <p>Age: {currentGirl.age}</p>
                <p>Height: {currentGirl.height}</p>
            </div>
            <Link to={`/strip-club/`} className="service button margin-center">Back</Link>
        </div>
    )
}