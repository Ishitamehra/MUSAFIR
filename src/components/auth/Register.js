import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const initialData = {
    email: "",
    password: "",
  };

  const [formdata, setFormdata] = useState(initialData);
  const [status, setStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const updateData = (e) => {
    const { id, value } = e.target;
    setFormdata({
      ...formdata,
      [id]: value.trim(),
    });
  };

  const registerFn = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(
        auth,
        formdata.email,
        formdata.password
      );
      setStatus(true);
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const goToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className="register">
      <div className="register__container">
        <h3>Register</h3>
        <input
          type="text"
          id="email"
          onChange={updateData}
          value={formdata.email}
          placeholder="Enter Email"
        />

        <input
          type="password"
          id="password"
          onChange={updateData}
          value={formdata.password}
          placeholder="Enter Password"
        />
        <br />

        <button className="btn" onClick={registerFn}>
          Register
        </button>

        <button className="login-btn" onClick={goToLoginPage}>
          Login
        </button>

        <br />
        {errorMessage && (
          <div className="error">
            <h2>{errorMessage}</h2>
          </div>
        )}
        <br />
        {status && (
          <div className="alert alert-success" role="alert">
            <p>Registered Successfully</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
