// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-google"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item">
          <Link to={`/`} className="menu__link">
            Home
          </Link>
        </li>
        <li className="menu__item">
          <Link to={`/about`} className="menu__link">
            About
          </Link>
        </li>
        <li className="menu__item">
          <Link to={`features`} className="menu__link">
            Features
          </Link>
        </li>
        <li className="menu__item">
          <Link to={`/blog`} className="menu__link">
            Blog
          </Link>
        </li>
        <li className="menu__item">
          <Link to={`/contact-us`} className="menu__link">
            Contact
          </Link>
        </li>
      </ul>
      <p className="footer-text">
        Copyright @ 2024, CoinB | All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
