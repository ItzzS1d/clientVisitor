import { createContext, useContext, useEffect, useState } from "react";
import { logIn, logOut } from "../../apiClient";

export const authContext = createContext();

const Authprovider = ({ children }) => {
  const [authInfo, setAuthInfo] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
      user: user || "",
      isLoggedIn: !!user,
      error: "",
    };
  });

  const handleLogin = async (formData) => {
    const data = await logIn(formData);
    if (data.error) {
      setAuthInfo({ user: "", isLoggedIn: false, error: data.error });
    } else {
      setAuthInfo((prevState) => ({
        ...prevState,
        user: data,
        isLoggedIn: true,
      }));
      localStorage.setItem("user", JSON.stringify(data));
    }
  };
  const handleLogOut = () => {
    localStorage.clear("user");
    logOut();
    setAuthInfo({ ...authInfo, user: "", isLoggedIn: false });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setAuthInfo((prevState) => ({
        ...prevState,
        user,
        isLoggedIn: true,
      }));
    }
  }, []);



  return (
    <authContext.Provider
      value={{ handleLogin, authInfo, setAuthInfo, handleLogOut }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default Authprovider;
