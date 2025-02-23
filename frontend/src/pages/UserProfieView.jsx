import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import api from '../api';

export default function UserProfileView() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        try {
            const response = await api.get("/api/user/view/");           
            const currentUser = response.data.find(user => user.email === localStorage.getItem('email'));            
            if (currentUser) {
                setUser(currentUser);
            } else {
                console.warn("User not found in API response.");
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
        </div>
    )
}