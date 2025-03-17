import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import React, {  useEffect } from 'react';
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
import EventsArchive from './pages/EventsArchive'
import EventDetails from './pages/EventDetails'
import MessageSent from './pages/MessageSent'
import EscapeRooms from './pages/EscapeRooms'
import CreateEscapeRoom from './pages/CreateEscapeRoom'
import EditEscapeRoom from './pages/EditEscapeRoom'
import EscapeRoomDetails from './pages/EscapeRoomDetails'

import Girls from './pages/Girls';
import CreateGirl from './pages/CreateGirl';

import UnderConstruction from './pages/UnderConstruction'
import UserProfileView from './pages/UserProfieView'
import UserProfileEdit from './pages/UserProfileEdit'
import BetZone from './pages/BetZone'


import Header from './components/Header'
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


// The user is logged out when the tab is closed
function App() {


  return (
    <BrowserRouter>
      <Header />
        <Routes>
          {/* Wrap ProtectedRoute around each component meant for only logged in users */}
          
          {/* Routes for users who are not logged in */}
          <Route path="/login" element={<><Login /></>} />
          <Route path="/register" element={<> <RegisterAndLogout /></>} />
          <Route path="/logout" element={<><Logout /></>} />

          {/* Routes for users who are logged in */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/contactus" element={<ProtectedRoute><ContactUs /></ProtectedRoute>} />
          <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
          <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
          <Route path="/events-archive" element={<ProtectedRoute><EventsArchive /></ProtectedRoute>} />
          <Route path="/events/:eventId" element={<ProtectedRoute><EventDetails /></ProtectedRoute>} />
          <Route path="/success" element={<ProtectedRoute><MessageSent /></ProtectedRoute>} />
          <Route path="/escape-rooms" element={<ProtectedRoute><EscapeRooms /></ProtectedRoute>} />
          <Route path="/escape-rooms/create" element={<ProtectedRoute><CreateEscapeRoom /></ProtectedRoute>} />
          <Route path="/escape-rooms/edit/:escapeRoomId" element={<ProtectedRoute><EditEscapeRoom /></ProtectedRoute>} />
          <Route path="/escape-rooms/:escapeRoomId" element={<ProtectedRoute><EscapeRoomDetails /></ProtectedRoute>} />
          <Route path="/computer-club" element={<ProtectedRoute><UnderConstruction /></ProtectedRoute>} />
          <Route path="/strip-club" element={<ProtectedRoute><Girls /></ProtectedRoute>} />
          <Route path="/girls/create" element={<ProtectedRoute><CreateGirl /></ProtectedRoute>} />
          <Route path="/marketplace" element={<ProtectedRoute><UnderConstruction /></ProtectedRoute>} />
          <Route path="/bet-zone" element={<ProtectedRoute><BetZone /></ProtectedRoute>} />
          <Route path="/user-profile" element={<ProtectedRoute><UserProfileView /></ProtectedRoute>} />
          <Route path="/user-profile/edit" element={<ProtectedRoute><UserProfileEdit /></ProtectedRoute>} />

          {/* Routes for users who are logged in as admin */}
          <Route path="/events/create" element={<AdminProtectedRoute><CreateEvent /></AdminProtectedRoute>} />
          <Route path="/services/create" element={<AdminProtectedRoute><CreateService /></AdminProtectedRoute>} />
          <Route path="/services/edit/:serviceId" element={<AdminProtectedRoute><EditService /></AdminProtectedRoute>} />
          <Route path="/events/edit/:eventId" element={<AdminProtectedRoute><EditEvent /></AdminProtectedRoute>} />

          {/* Routes for 404 and 403 pages */}
          <Route path="*" element={<NotFound />} />
          <Route path="/forbidden" element={<NotAuthorized />} />

        </Routes>
      <Footer />     
    </BrowserRouter>
  )
}

export default App
