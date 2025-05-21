import React from "react";
import { Link } from "react-router-dom";
import "./stylepages.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ResetPage = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-white fixed-top navbar-shadow">
          <div className="container navbar-container">
            {/* Left side - Logo only */}
            <a className="navbar-brand" href="#">
              <div className="navbar-logo-circle">
                <img
                  src="/img/eduriselanding/Ellipse 1.png"
                  alt="EduRise Logo"
                />
              </div>
            </a>

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
                  <a
                    className="nav-link active fw-bold"
                    href="landingbefore.html"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active fw-bold"
                    href="#"
                    style={{ color: "#3375CC" }}
                  >
                    <u>LOGIN PAGE</u>
                  </a>
                </li>
              </ul>
            </div>

            {/* Right side - Profile Button */}
            <div className="profile-button-container">
              <Link to="/loginadmin" className="profile-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="login-section">
          <div className="login-container">
            <div className="row g-0 h-100">
              {/* Login Form Section */}
              <div className="col-md-6 login-form-section">
                <div className="login-form-wrapper">
                  <div className="text-center mb-4">
                    <h2 className="welcome-title">
                      <span>WELCOME BACK TO </span>
                      <span className="text-primary fst-italic">EDU</span>
                      <span className="text-warning fst-italic">RISE</span>
                    </h2>
                    <p className="text-muted mb-5">
                      Lupa Password? Jangan Khawatir! Lengkapi Data Akun Anda
                      Untuk Meresetnya
                    </p>
                  </div>

                  <form>
                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="form-label fw-bold mt-3"
                      >
                        Username
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="Enter your username"
                        />
                        <span className="input-group-text">
                          <img
                            src="/img/eduriselanding/li_user.png"
                            alt="User Icon"
                            width="24"
                            height="24"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="form-label fw-bold">
                        Email
                      </label>
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter your email address"
                        />
                        <span className="input-group-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label fw-bold">
                        New Password
                      </label>
                      <div className="input-group">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          defaultValue="**********"
                        />
                        <span className="input-group-text">
                          <img
                            src="/img/eduriselanding/li_lock.png"
                            alt="Lock Icon"
                            width="24"
                            height="24"
                          />
                        </span>
                      </div>
                      <div className="d-flex justify-content-end mt-2"></div>
                    </div>
                    <div className="d-grid gap-2 mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary py-2 fw-bold"
                      >
                        Reset
                      </button>
                    </div>
                    <p className="text-center mt-4">
                      Don't have an account?{" "}
                      <Link to="/registerpage" className="signup-link">
                        Sign up here!
                      </Link>
                    </p>
                  </form>
                </div>
              </div>

              {/* Image Section */}
              <div className="col-md-6 login-image-section">
                <img
                  src="/img/eduriselanding/stack-books-lightbulb-3d-render-icon.jpg"
                  alt="Login Image"
                  className="login-image"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ResetPage;
