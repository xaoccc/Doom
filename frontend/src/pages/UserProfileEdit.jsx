import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoadingIndicator from '../components/LoadingIndicator';


import api from '../api';

export default function UserProfileEdit() {
    const location = useLocation();
    const [user, setUser] = useState(location.state?.user || {});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    console.log(user);

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
        if (user.age < 18 || user.age > 120) {
            setLoading(false);
            return;
        }

        // We pass the user object to the backend
        // The backend returns the updated user object and we update the state and update the local storage with the new email
        // So that the UserProfileView component can load and display the updated user data (because we use the email to fetch the user data)
        // Note that the url has a trailing slash - this is because the backend expects it!!!
        try {
            const res = await api.put(`/api/user/edit/${user.id}/`, user );
            setUser(res.data);
            localStorage.setItem('email', user.email);
            navigate('/user-profile', { state: { user: res.data } });
        } catch (error) {
            console.error(`Error editing user data: ${error}`);
        } finally {
            setLoading(false);
        }
    }


    return (
        <div>            
            <h1>Edit User Profile</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <input
                    type="email"
                    className="form-input"
                    value={user.email}
                    placeholder="E-mail"
                    onChange={(e) => {
                        changeInput(e);
                        setUser(prevUser => ({ ...prevUser, email: e.target.value }));
                    }}
                    onInvalid={(e) => validate(e, 'Please enter a valid e-mail address')}
                    required
                />
                <input
                    type="number"
                    className="form-input"
                    value={user.age}
                    placeholder="Age"
                    min="18"
                    onChange={(e) => {
                        changeInput(e);
                        setUser(prevUser => ({ ...prevUser, age: e.target.value }));
                    }}
                    onInvalid={(e) => validate(e, 'You must be 18 or older to register')}
                    required
                />
                {loading && <LoadingIndicator loading={loading} />}
                <button type="submit" className="form-button">Submit</button>
            </form>

        </div>
    )

}