import { useState } from "react";
import api from "../api";
import { useNavigate, Link } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN, ADMIN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";


export default function RegisterForm({ route, method }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const name = (method === 'login') ? 'Enter the realms of Club Doom' : 'Register';

    function changeInput(e) {
        e.target.setCustomValidity('');
        const nextElement = e.target.nextElementSibling;
        if (nextElement && nextElement.classList.contains('error-message')) {
            nextElement.remove();
        }
    }

    function validate(e, message) {
        const nextElement = e.target.nextElementSibling;
        if (nextElement && nextElement.classList.contains('error-message')) {
            nextElement.remove();
        }

        e.target.setCustomValidity(' ');

        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = message;
        e.target.insertAdjacentElement('afterend', errorMessage);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (method === 'register' && (age < 18 || age > 120 || password.length < 8)) {
            setLoading(false);
            return;
        }

        try {
            const res = await api.post(route, { email, password, age });

            if (method === 'login') {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                localStorage.setItem(ADMIN, res.data.is_staff);
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
        // Form for user registration and login
        // The validation is made dynamically on the client side for better UX, but it should be done on the server side as well for security reasons
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="email"
                className="form-input"
                value={email}
                placeholder="E-mail"
                onChange={(e) => {
                    changeInput(e);
                    setEmail(e.target.value);
                }}
                onInvalid={(e) => validate(e, 'Please enter a valid e-mail address')}
                required
            />
            <input
                type="password"
                className="form-input"
                value={password}
                pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).+"
                minLength="8"
                onChange={(e) => {
                    changeInput(e);
                    setPassword(e.target.value);
                }}
                onInvalid={(e) => validate(e, 'Please enter a valid password. Your password must contain at least 8 charactrs, one number, one lowercase and one uppercase letter')}
                placeholder="Password"
                required
            />
            <h4>
                <Link to='http://127.0.0.1:8000/accounts/google/login/?process=connect'>Or use Google</Link>
            </h4>
            {method === 'register' && (
                <>
                    <input
                        type="number"
                        className="form-input"
                        value={age}
                        placeholder="Age"
                        min="18"
                        onChange={(e) => {
                            changeInput(e);
                            setAge(e.target.value);
                        }}
                        onInvalid={(e) => validate(e, 'You must be 18 or older to register')}
                        required
                        
                    />

                </>)
            }

            {loading && <LoadingIndicator loading={loading} />}
            <button type="submit" className="form-button"> {name} </button>
        </form>
    );
}