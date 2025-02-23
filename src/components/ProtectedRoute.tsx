import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const rol = localStorage.getItem("rol"); // Recupera el rol guardado al hacer login

  if (!token) {
    return <Navigate to="/login" replace />; // 🔹 Si no hay sesión, lo manda a login
  }

  if (rol !== "admin") {
    return <Navigate to="/dashboard" replace />; // 🔹 Si no es admin, lo manda al dashboard normal
  }

  return <Outlet />; // 🔹 Si es admin, permite acceder a las rutas protegidas
};

export default ProtectedRoute;
