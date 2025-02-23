import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import api from '../api';

export default function UserProfileView() {
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        api.get("/api/user/view/")
        .then((response) => {
            setUser(response.data.filter(user => user.email === localStorage.getItem('email')));
        })
        .catch((error) => console.error(`Error: ${error}`));
    }


    return (
        <div>            
            <h1>User Profile</h1>
            <h2>Here you can see your user profile</h2>
            <h4>Email address: {`${user[0].email}`}</h4>
            <h4>{(user[0].age) ? `Age: ${user[0].age}` : null}</h4>
        </div>
    )
}