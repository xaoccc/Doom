import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../api';

export default function UserProfileView() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        try {
            const email = localStorage.getItem('email');
            // The frontend passes the email as a query parameter to the backend
            const response = await api.get(`/api/user/view/${encodeURIComponent(email)}`);    
            // The backend returns the user object (not a list) or null if the user is not found
          
            if (response.data) {
                setUser(response.data); 
            } else {
                console.warn("User not found.");
                setUser(null);
            }
        } catch (error) {
            console.error(`Error fetching user data: ${error}`);
        }
    }


    return (
        <div>            
            <h1>User Profile</h1>
            <h2>Here you can see your user profile</h2>
            {user ? (
                <>
                    <h4>Email address: {user.email}</h4>
                    {user.age && <h4>Age: {user.age}</h4>}
                </>
            ) : (
                <p>No user data...</p>
            )}
            <Link to="/user-profile/edit" state={{ user }} className="button w-20 margin-center">Edit your profile</Link>
        </div>
    )
}