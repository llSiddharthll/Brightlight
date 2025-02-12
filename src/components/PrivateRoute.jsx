import React from "react";
import { router.replace, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ element: Element }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation(); 
  
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
    if (isAuthenticated || isLoggedIn) {
      return <Element />;
    } else {
      return <router.replace to="/auth/panel/dash/bright" state={{ from: location }} replace />;
    }
  };

export default PrivateRoute;
