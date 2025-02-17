import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ Component }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    if (!isAuthenticated && !isLoggedIn) {
      router.replace("/auth/panel/dash/bright");
    }
  }, [isAuthenticated, isLoggedIn, router]);

  if (!isAuthenticated && !isLoggedIn) {
    return null; // Prevents flickering before redirect
  }

  return <Component />;
};

export default PrivateRoute;
