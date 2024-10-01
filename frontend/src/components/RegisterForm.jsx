import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";


export default function RegisterForm({ route, method }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const name = (method === 'login') ? 'Login' : 'Register';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await api.post(route, { email, password });

            if (method === 'login') {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                localStorage.setItem('email', email);
                localStorage.setItem('login', true);
                navigate('/');
            } else {
                navigate('/login');
            }
            
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{name}</h1>
            <input
                type="text"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
            />
            <input
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            { loading && <LoadingIndicator loading={loading} /> }
            <button type="submit" className="form-button"> {name} </button>
        </form>
    );
}