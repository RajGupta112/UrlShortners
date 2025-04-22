import { Navigate } from "react-router-dom";
import { useStoreContext } from "./context/ContextApi";

export default function PrivateRoute({ children, publicPage }) {
  const { token } = useStoreContext();
  
  if (publicPage) {
    // Redirect to dashboard if logged in (no going back to /register)
    return token ? <Navigate to="/dashboard" replace /> : children;
  }
  
  // Redirect to login if not logged in (no going back to /dashboard)
  return token ? children : <Navigate to="/login" replace />;
}