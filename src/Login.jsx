import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
export default function Login({ isLogged, setIsLogged }) {
  localStorage.setItem("georgestathis13@gmail.com", "17032010");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      var pass = localStorage.getItem(email);
      if (pass === password) {
        console.log("success");
        setIsLogged(true);
        console.log(isLogged);
        navigate("/dashboardTasks");
      } else {
        setErrors({ wrongCredentials: "Invalid email or password" });
      }
    }
  };

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
        <h2>Login</h2>
        <div className="LoginForm">
          <input
            label="email"
            type="email"
            className="form-control mt-4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <input
            label="password"
            type="password"
            className="form-control mt-4"
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
        </div>
        <button type="submit" className="login-button mt-4">
          Login
        </button>
      </form>
    </>
  );
}
