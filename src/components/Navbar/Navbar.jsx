// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CionContext } from "../../context/CionContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CionContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={`/`}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      {/* <h3>CoinB</h3> */}
      <ul>
        <Link to={`/`}>
          <li>Home</li>
        </Link>
        <Link to={`/about`}>
          <li>About</li>
        </Link>
        <Link to={`/features`}>
          <li>Features</li>
        </Link>
        <Link to={`/blog`}>
          <li>Blog</li>
        </Link>
        <Link to={`/contact-us`}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <Link to={`/sign-up`} className="btn-link-navbar">
          Sign Up <img src={arrow_icon} alt="arrow_icon" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
