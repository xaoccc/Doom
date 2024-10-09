import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    function changeInput(e) {
        e.target.setCustomValidity('');
        const nextElement = e.target.nextElementSibling;
        if (nextElement && nextElement.classList.contains('error-message')) {
            nextElement.remove();
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        api.post("/sendemail/", { userName, email, message })
            .then((res) => {
                if (res.status === 200) {
                    console.log("Email sent successfully!");
                    navigate('/');

                } else {
                    console.log("Emil not sent!");
                }

            })
            .catch((error) => console.error(`Error: ${error}`));
    }
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md center-xs">
                        <h2 className="section-title">Contact</h2>
                    </div>
                </div>
                <div className="row margin-bottom-small center-xs">
                    <div className="col-md">Call Us<br />666 666 666</div>
                    <div className="col-md">Address<br />Helldrive 18</div>
                    <div className="col-md">Email<br />xaocccc@gmail.com</div>
                </div>
                <form action="" onSubmit={sendEmail}>
                    <div className="row margin-bottom-small center-xs">

                        <div className="col-md padding-small">
                            <div className="row">
                                <div className="col-md">
                                    <input 
                                        placeholder="Enter Your Name" 
                                        type="text" name="userName" 
                                        value={userName} 
                                        onChange={(e) => {
                                            changeInput(e);
                                            setUserName(e.target.value);
                                        }} 
                                        className="margin-bottom-small" 
                                    />
                                    <input 
                                        placeholder="Enter Your Email" 
                                        type="email" 
                                        name="email" 
                                        value={email} 
                                        onChange={(e) => {
                                            changeInput(e);
                                            setEmail(e.target.value);                                    
                                        }} 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md padding-small">
                            <textarea 
                                placeholder="Your Message" 
                                name="message" 
                                rows="8" 
                                value={message} 
                                onChange={(e) => {
                                    changeInput(e);
                                    setMessage(e.target.value);                                    
                                }} 
                                className="margin-bottom-small"
                            >
                            </textarea>
                            <button>Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

