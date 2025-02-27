import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';


interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const userRole = localStorage.getItem('rol');
  
  // If no role or role not allowed, redirect to landing page
  if (!userRole || !allowedRoles.includes(userRole)) {
    localStorage.setItem('rol', 'invitado');
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

{/*
  <Route path="/dashboard" element={
  <ProtectedRoute allowedRoles={['admin']}>
    <Dashboard/>
  </ProtectedRoute>
}/>

*/}
export default ProtectedRoute; 

