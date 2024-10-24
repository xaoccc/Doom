import { Navigate } from 'react-router-dom'
import { ADMIN } from '../constants'


function AdminProtectedRoute({ children }) {
   
    const isAdmin = localStorage.getItem(ADMIN);
    return (isAdmin === "true") ? children : <Navigate to="/forbidden" />
}

export default AdminProtectedRoute