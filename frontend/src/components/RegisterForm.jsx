import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN, ADMIN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";


export default function RegisterForm({ route, method }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
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

    function createErrorMesage(target, message) {
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = message;
        target.insertAdjacentElement('afterend', errorMessage);
    }

    function validate(e, message) {
        const nextElement = e.target.nextElementSibling;
        if (nextElement && nextElement.classList.contains('error-message')) {
            nextElement.remove();
        }
        e.target.setCustomValidity(' ');
        createErrorMesage(e.target, message);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (method === 'register' && password !== passwordRepeat) {
            createErrorMesage(document.querySelector('#password-repeat'), 'Passwords do not match');
            setLoading(false);
            return;
        }
        if (method === 'register' && (age < 18 || age > 120 || password.length < 8 || password !== passwordRepeat)) {
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
            if (error.response && error.response.status === 400) {
                createErrorMesage(document.querySelector('.form-button'), 'This e-mail is already registered!');
            } else {
                console.log("An unexpected error occurred.");
            }
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
            {method === 'register' && (
                <>
                    <input
                        type="password"
                        id="password-repeat"
                        className="form-input"
                        value={passwordRepeat}
                        pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).+"
                        minLength="8"
                        onChange={(e) => {
                            changeInput(e);
                            setPasswordRepeat(e.target.value);
                        }}
                        onInvalid={(e) => validate(e, 'Please enter a valid password. Your password must contain at least 8 charactrs, one number, one lowercase and one uppercase letter')}
                        placeholder="Repeat Password"
                        required
                    />
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