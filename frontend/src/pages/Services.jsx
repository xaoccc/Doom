import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Service from '../components/Service';
import api from '../api';

export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        getServices();
    }, []);

    const getServices = async () => {
        api.get("/api/services/")
        .then((response) => {
          setServices(response.data);
        })
        .catch((error) => console.error(`Error: ${error}`));;
    }

    const deleteService = async (id) => {
        api.delete(`/api/notes/${id}/`)
          .then((res) => {
            if (res.status === 204) {
              console.log("Note deleted successfully!");
              getServices();
            } else {
              console.log("Note was not deleted!");
            }
          })
          .catch((error) => console.error(`Error: ${error}`));    
      }

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 center-xs">
                        <h2 className="section-title">Services</h2>
                    </div>
                </div>
                <div className="services-container">
                    { services.map((service) => <Service service={service} onDelete={deleteService} />) }
                </div>
                {
                    localStorage.getItem('admin') === 'true' && (
                        <div className="adminPanel">
                            <button className="addEvent">Add Service</button>
                        </div>
                    )
                }

            </div>
        </section>
    )
}