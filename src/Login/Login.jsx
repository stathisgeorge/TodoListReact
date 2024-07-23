import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

export default function Login({ isLogged, setIsLogged }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/dashboard");
    }
  }, [isLogged, navigate]);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      var pass = localStorage.getItem(email);
      if (pass === password) {
        setIsLogged(true);
        localStorage.setItem("isLogged", "true");
        navigate("/dashboard");
      } else {
        setErrors({ wrongCredentials: "Invalid email or password" });
      }
    }
  };

  // Validate email and password
  const validate = () => {
    const error = {};
    if (!email) {
      error.email = "Email is required";
    } else if (!email.includes("@")) {
      error.email = "Please enter a valid email";
    }

    if (!password) {
      error.password = "Password is required";
    } else if (password.length < 8) {
      error.password = "Password should be more than 8 characters/numbers";
    }
    return error;
  };

  return (
    <>
      <form className="form_container" onSubmit={handleSubmit}>
      <div className="LoginForm">
        <h1>Login</h1>
           <input
            label="email"
            type="email"
            className="form-control mt-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <input
            label="password"
            type="password"
            className="form-control mt-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error">{errors.password}</div>}
          <span>
            {errors.wrongCredentials && (
              <div className="error">{errors.wrongCredentials}</div>
            )}
          </span>
         <button type="submit" className="login-button mt-2">
          Login
        </button>
        </div>
        <Link to="/register"  className="mt-1">
        I haven't got Account <span>SignIn</span>{" "}
      </Link>
     
      </form>
     
    </>
  );
}
