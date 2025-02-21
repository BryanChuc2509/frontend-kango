import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Register from "./components/Register";
import Login from "./components/login";
import Dashboard from "./pages/Dashboard";
import Vehiculos from "./pages/Vehiculos";
import Conductores from "./pages/Conductores";
import Destinos from "./pages/Destinos";
import Notificaciones from "./pages/Notificaciones";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import FormularioVehiculo from "./pages/FormularioVehiculo";
import FormularioConductores from "./pages/FormularioConductores";
import FormularioDestinos from "./pages/FormularioDestinos";
import ProtectedRoute from "./components/ProtectedRoute"; 

function App() {
  return (
    <GoogleOAuthProvider clientId="478273073150-cn7g8loqgl7cthvcru3u6gfd680qblsa.apps.googleusercontent.com">
      <Router>
        <Routes>
          {/* 🔹 Rutas de autenticación */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* 🔹 Rutas protegidas de admin */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/admin/*"
              element={
                <div className="flex h-screen bg-gray-100">
                  <Sidebar />
                  <div className="flex-1 flex flex-col">
                    <Header />
                    <main className="p-6">
                      <Routes>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="vehiculos" element={<Vehiculos />} />
                        <Route path="conductores" element={<Conductores />} />
                        <Route path="destinos" element={<Destinos />} />
                        <Route path="notificaciones" element={<Notificaciones />} />
                        <Route path="registrar-vehiculo" element={<FormularioVehiculo />} />
                        <Route path="registrar-conductor" element={<FormularioConductores />} />
                        <Route path="registrar-destino" element={<FormularioDestinos />} />
                      </Routes>
                    </main>
                  </div>
                </div>
              }
            />
          </Route>
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
