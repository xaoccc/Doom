import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Service from '../components/Service';
import api from '../api';

export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        getServices();
    }, [services]);

    const getServices = async () => {
        api.get("/api/services/", { headers: { 
            'ngrok-skip-browser-warning': 'true' }
         })
        .then((response) => {
          setServices(response.data);
        })
        .catch((error) => console.error(`Error: ${error}`));;
    }


    return (
        <section className="services" id="services">
            <div className="container">
                <div className="row">
                    <h2 className="section-title">Services</h2>
                </div>
                <div className="services-container">
                    {services.map((service, index) => <Service key={index} service={service} />) }
                </div>
                {
                    localStorage.getItem('admin') === 'true' && (
                        <div className="adminPanel">
                            <Link className="addEvent button" to="/services/create">Add Service</Link>
                        </div>
                    )
                }

            </div>
        </section>
    )
}