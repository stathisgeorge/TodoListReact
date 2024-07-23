import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Header from "./Helpers/Header";
import TitleApp from "./Helpers/TitleApp";
import Login from "./Login/Login";
import Register from "./Registration/Register";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLogged") === "true";
    setIsLogged(loggedIn);
  }, []);
  return (
    <>
      <Router>
        <Header isLogged={isLogged} setIsLogged={setIsLogged} />
        <TitleApp />
        <main>
          <Routes>
            <Route
              path="/login"
              element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/Dashboard" element={<Dashboard />} />

            <Route
              path="/"
              element={
                isLogged ? (
                  <Navigate to="/Dashboard" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
