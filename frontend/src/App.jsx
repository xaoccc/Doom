import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Services from './pages/Services'
import CreateService from './pages/CreateService'
import CreateEvent from './pages/CreateEvent'
import EditService from './pages/EditService'
import EditEvent from './pages/EditEvent'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'

import Header from './components/Header'
import HeaderNoUser from './components/HeaderNoUser'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import AdminProtectedRoute from './components/AdminProtectedRoute'
import NotFound from './pages/NotFound'
import NotAuthorized from './pages/NotAuthorized'

import '../public/styles/normalize.min.css'
import '../public/styles/flexboxgrid.css'
import '../public/styles/theme.css'

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />
}

// This function is used to clear the local storage before registration of a new user
function RegisterAndLogout() {
  localStorage.clear();
  return <Register />
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
          {/* Wrap ProtectedRoute around each component meant for only logged in users */}
          
          {/* Routes for users who are not logged in */}
          <Route path="/login" element={<><HeaderNoUser /> <Login /></>} />
          <Route path="/register" element={<><HeaderNoUser /> <RegisterAndLogout /></>} />
          <Route path="/logout" element={<><HeaderNoUser /><Logout /></>} />

          {/* Routes for users who are logged in */}
          <Route path="/" element={<ProtectedRoute> <Header />  <Home /> </ProtectedRoute>} />
          <Route path="/contactus" element={<ProtectedRoute><Header /><ContactUs /></ProtectedRoute>} />
          <Route path="/services" element={<ProtectedRoute><Header /><Services /></ProtectedRoute>} />
          <Route path="/events" element={<ProtectedRoute><Header /><Events /></ProtectedRoute>} />
          <Route path="/events/:eventId" element={<ProtectedRoute><Header /><EventDetails /></ProtectedRoute>} />

          {/* Routes for users who are logged in as admin */}
          <Route path="/events/create" element={<AdminProtectedRoute><Header /><CreateEvent /></AdminProtectedRoute>} />
          <Route path="/services/create" element={<AdminProtectedRoute><Header /><CreateService /></AdminProtectedRoute>} />
          <Route path="/services/edit/:serviceId" element={<AdminProtectedRoute><Header /><EditService /></AdminProtectedRoute>} />
          <Route path="/events/edit/:eventId" element={<AdminProtectedRoute><Header /><EditEvent /></AdminProtectedRoute>} />

          {/* Routes for 404 and 403 pages */}
          <Route path="*" element={<NotFound />} />
          <Route path="/forbidden" element={<NotAuthorized />} />

        </Routes>
        <Footer />     
    </BrowserRouter>
  )
}

export default App
