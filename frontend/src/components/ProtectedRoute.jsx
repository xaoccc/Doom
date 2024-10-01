import { Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import api from '../api'
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../constants'


function ProtectedRoute({ children }) {
    const [isAutorized, setIsAutorized] = useState(null)

    useEffect(() => {
        auth().catch((error) => {
            console.log(error);
            setIsAutorized(false);  
        })
    }, [])

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try { 
            // Send a request to the server to refresh the token
            const response = await api.post('/api/token/refresh/', { refresh: refreshToken });
            if (response.status === 200) {
                const token = response.data.access;
                localStorage.setItem(ACCESS_TOKEN, token);
                setIsAutorized(true);
            } else {
                setIsAutorized(false);
            }

        } catch (error) {
            console.log(error);
            setIsAutorized(false);
        }
    }

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAutorized(false);
            return
        }
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;

        if (tokenExpiration < now) {
            await refreshToken();
        } else {
            setIsAutorized(true);
        }
    }

    if (isAutorized === null) {
        return <div>Loading...</div>
    }

    return isAutorized ? children : <Navigate to="/login" />
}

export default ProtectedRoute