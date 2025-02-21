import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Register from './components/Register';
import Login from './components/login';
import VistaPrincipal from './pages/VistaPrincipal';

function App() {
  return (
    <GoogleOAuthProvider clientId="478273073150-cn7g8loqgl7cthvcru3u6gfd680qblsa.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirige al login por defecto */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/viewUser" element={<VistaPrincipal />} />
          
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
