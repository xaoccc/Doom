import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Header from './components/Header'
import HeaderNoUser from './components/HeaderNoUser'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './pages/NotFound'

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
          <Route path="/" element={<ProtectedRoute> <Header />  <Home /> </ProtectedRoute>} />
          <Route path="/login" element={<><HeaderNoUser /> <Login /></>} />
          <Route path="/register" element={<><HeaderNoUser /> <RegisterAndLogout /></>} />
          <Route path="/logout" element={<><HeaderNoUser /><Logout /></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />     
    </BrowserRouter>
  )
}

export default App
