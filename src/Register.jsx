import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (!errors.email && !errors.password) {
      localStorage.setItem(email, password);
      navigate("/login");
    }

    console.log("errors", errors);
  };

  const validate = () => {
    const error = {};
    var pass = localStorage.getItem(email);

    if (!email) {
      error.email = "Email is required";
    } else {
      error.email = "";
    }
    if (!password || !confPassword) {
      error.password = "password is required";
    } else if (password.length < 8) {
      error.password = "password should be more than 8 characters/numbers";
      return error;
    } else if (password !== confPassword) {
      error.password = "Passwords not match";
    } else {
      error.password = "";
    }
    if (error.password && error.email) {
      if (pass == password) {
      } else {
        error.wrongCredentials = "Email or password is wrong";
      }
      console.log(error);
    }

    return error;
  };
  return (
    <>
      <form className="form_container" onSubmit={handleSubmit}>
        <div className="LoginForm">
          <h1>Registration</h1>
          <input
            label="email"
            type="email"
            placeholder="Email"
            className="form-control mt-3"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <input
            label="password"
            type="password"
            placeholder="password"
            className="form-control mt-3"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            label="confirmedPassword"
            type="password"
            placeholder="password"
            className="form-control mt-3"
            onChange={(e) => setConfPassword(e.target.value)}
          />{" "}
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <button type="submit" className="login-button mt-3">
          Login
        </button>
      </form>
      <p className="mt-1">
        Already Have an Account <span>SignIn</span>{" "}
      </p>
    </>
  );
}
