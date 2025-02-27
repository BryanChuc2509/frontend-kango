import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Register from "./pages/public/Register";
import Login from "./pages/public/login";
import Dashboard from "./pages/admin/Dashboard";
import Vehiculos from "./pages/admin/Vehiculos";
import Conductores from "./pages/admin/Conductores";
import Destinos from "./pages/admin/Destinos";
import Notificaciones from "./pages/admin/Notificaciones";
import Sidebar from "./components/admin/Sidebar";
import Header from "./components/admin/Header";
import FormularioVehiculo from "./pages/admin/FormularioVehiculo";
import FormularioConductores from "./pages/admin/FormularioConductores";
import FormularioDestinos from "./pages/admin/FormularioDestinos";
import ProtectedRoute from "./components/public/ProtectedRoute";
import LandingPage from "./pages/public/LandingPage";
import ElegirVehiculo from "./pages/elegirVehiculo";
import PaidUser from "./pages/user/PaidUser/PaidUser";
import ProtectedRoute2 from "./components/public/ProtectedRoute2";
import LandingPage2 from "./pages/public/LandingPage2";
import NotFound from "./pages/public/notFound";

function App() {
  return (
    <GoogleOAuthProvider clientId="478273073150-cn7g8loqgl7cthvcru3u6gfd680qblsa.apps.googleusercontent.com">
      <Router>
        <Routes>
          {/* 🔹 Rutas de USUARIO */}

        <Route path="/" element={
          <ProtectedRoute allowedRoles={['invitado']}>
            <LandingPage/>
          </ProtectedRoute>
        }/>/
                <Route path="/landing" element={
          <ProtectedRoute allowedRoles={['pasajero']}>
            <LandingPage2/>
          </ProtectedRoute>
        }/>

        <Route path="/login" element={
          <ProtectedRoute allowedRoles={['invitado']}>
            <Login/>
          </ProtectedRoute>
        }/>

        <Route path="/register" element={
          <ProtectedRoute allowedRoles={['invitado']}>
            <Register/>
          </ProtectedRoute>
        }/>

        <Route path="/elegir-vehiculo" element={
          <ProtectedRoute allowedRoles={['pasajero']}>
            <ElegirVehiculo/>
          </ProtectedRoute>
        }/>
        <Route path="/paidUser" element={
          <ProtectedRoute allowedRoles={['pasajero']}>
            <PaidUser/>
          </ProtectedRoute>
        }/>
        <Route
          path="*"
          element={
          <NotFound />
        }/>

          {/* 🔹 Rutas protegidas de ADMIN */}
          
          <Route element={<ProtectedRoute2 />}>
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
                        <Route
                          path="notificaciones"
                          element={<Notificaciones />}
                        />

                        <Route
                          path="registrar-vehiculo"
                          element={<FormularioVehiculo />}
                        />

                        <Route
                          path="registrar-conductor"
                          element={<FormularioConductores />}
                        />

                        <Route
                          path="registrar-destino"
                          element={<FormularioDestinos />}
                        />
                        
                        <Route
                          path="*"
                          element={<NotFound />}
                        />

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
