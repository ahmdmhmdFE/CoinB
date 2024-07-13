// eslint-disable-next-line no-unused-vars
import React from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true" className="label-signUp">
            Sign up
          </label>
          <input
            className="input-login"
            type="text"
            name="txt"
            placeholder="User-name"
            required
          />
          <input
            className="input-login"
            type="email"
            name="email"
            placeholder="E_mail"
            required
          />
          <input
            className="input-login"
            type="number"
            name="broj"
            placeholder="Phone"
            required
          />
          <input
            className="input-login"
            type="password"
            name="pswd"
            placeholder="Password"
            required
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            className="input-login"
            type="email"
            name="email"
            placeholder="E_mail"
            required
          />
          <input
            className="input-login"
            type="password"
            name="pswd"
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
