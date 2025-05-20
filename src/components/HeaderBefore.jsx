import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function HeaderBefore() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white fixed-top navbar-shadow">
        <div className="container navbar-container">
          {/* Left side - Logo only */}
          <Link className="navbar-brand" to="/">
            <div className="navbar-logo-circle">
              <img src="/img/eduriselanding/Ellipse 1.png" alt="EduRise Logo" />
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Center - Navigation Links */}
          <div
            className="collapse navbar-collapse justify-content-start ms-5"
            id="navbarNav"
          >
            <ul className="navbar-nav nav-auto-layout">
              <li className="nav-item">
                <Link
                  className="nav-link active fw-bold"
                  to="/"
                  style={{ color: "#3375CC" }}
                >
                  <u>HOME</u>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right side - Login Button */}
          <div className="profile-button-container d-flex gap-3">
            <Link to="/login" className="login-button">
              LOGIN
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderBefore;
