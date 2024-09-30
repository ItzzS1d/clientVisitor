import { Routes, Route } from "react-router-dom";
import Signin from "./auth/Signin";
import Home from "./pages/Home";
import ClientVisitForm from "./pages/ClientVisitForm";
import ProtectedRoute from "./components/ProtectedRoute";
import LayoutWithNavbar from "./components/LayoutWithNavbar";

const App = () => {
  return (
    <Routes>
      <Route element={<LayoutWithNavbar />}>
        <Route
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          path="/"
        />
        <Route
          element={
            <ProtectedRoute>
              <ClientVisitForm />
            </ProtectedRoute>
          }
          path="/clientvisit"
        />
      </Route>
      <Route element={<Signin />} path="/login" />
    </Routes>
  );
};

export default App;
