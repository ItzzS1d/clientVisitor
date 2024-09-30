import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authprovider";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const user = useAuth();
  const { authInfo } = user;
  useEffect(() => {
    if (!authInfo.isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [navigate, authInfo]);

  return children;
};

export default ProtectedRoute;
