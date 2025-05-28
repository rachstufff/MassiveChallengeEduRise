import React from "react";
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
  // const navigate = useNavigate();

  // // Replace the navigateTo function with navigate from React Router
  // const navigateTo = (path) => {
  //   navigate(path);
  // };

  return (
    <>
      <header>
        <nav className="bg-white shadow-md h-[100px] fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto px-4 h-full flex items-center justify-between">
            {/* Left side - Logo and Navigation Links */}
            <div className="flex items-center">
              <Link className="flex items-center" to="/">
                <div className="w-[84px] h-[84px] rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm">
                  <img
                    src="/img/eduriselanding/Ellipse 1.png"
                    alt="EduRise Logo"
                    className="w-[70px] h-[70px] object-contain"
                  />
                </div>
              </Link>

              <div className="hidden lg:flex ml-8">
                <ul className="flex space-x-6">
                  {/* INI DIHUBUNGKAN KE landingBefore.jsx */}
                  <li>
                    <Link className="font-bold" to="/">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-bold text-[#3375CC] underline !text-[#3375CC] !underline"
                      to="/login"
                    >
                      LOGIN PAGE
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <button
              className="lg:hidden p-2 rounded-md"
              type="button"
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Right side - Profile Button dengan background circle */}
            {/* INI DIHUBUNGKAN KE loginAdmin.jsx */}
            <Link
              to="/loginadmin"
              className="w-10 h-10 rounded-full bg-[#3375CC] text-white flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="flex justify-center items-center min-h-[calc(100vh-76px)] px-5 mt-20 mb-20">
          <div className="w-full max-w-[1130px] h-[720px] bg-white rounded-lg overflow-hidden shadow-md mx-auto">
            <div className="flex flex-col md:flex-row h-full">
              {/* Login Form Section */}
              <div className="w-full md:w-1/2 flex items-start justify-center p-10 pt-16">
                <div className="w-full max-w-[400px]">
                  <div className="text-center mb-[60px]">
                    <h2 className="text-2xl font-bold mb-2">
                      <span>HELLO THERE, WELCOME </span>
                      <span className="text-[#3375CC] italic">EDU</span>
                      <span className="text-[#FFB800] italic">RISE</span>
                    </h2>
                    <p className="text-gray-500 mb-6">
                      Lengkapi Data Akun dan mendaftar Untuk Melanjutkan
                    </p>
                  </div>

                  <form className="mt-0">
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block font-bold mt-3 mb-1"
                      >
                        Email
                      </label>
                      <div className="flex">
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-[#3375CC]/25 focus:border-[#3375CC]"
                          id="email"
                          placeholder="Enter your email address"
                        />
                        <span className="inline-flex items-center px-3 bg-gray-100 border border-l-0 border-gray-300 rounded-r">
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

                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="block font-bold mb-1"
                      >
                        Username
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-[#3375CC]/25 focus:border-[#3375CC]"
                          id="username"
                          placeholder="Enter your username"
                        />
                        <span className="inline-flex items-center px-3 bg-gray-100 border border-l-0 border-gray-300 rounded-r">
                          <img
                            src="/img/eduriselanding/li_user.png"
                            alt="User Icon"
                            className="w-6 h-6"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="password"
                        className="block font-bold mb-1"
                      >
                        Password
                      </label>
                      <div className="flex">
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-[#3375CC]/25 focus:border-[#3375CC]"
                          id="password"
                          defaultValue="**********"
                        />
                        <span className="inline-flex items-center px-3 bg-gray-100 border border-l-0 border-gray-300 rounded-r">
                          <img
                            src="/img/eduriselanding/li_lock.png"
                            alt="Lock Icon"
                            className="w-6 h-6"
                          />
                        </span>
                      </div>
                      <div className="flex justify-end mt-2"></div>
                    </div>

                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full bg-[#3375CC] hover:bg-[#295ea3] text-white font-bold py-2 px-4 rounded transition-colors"
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center mt-4">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="!text-[#DDA853] !hover:underline"
                      >
                        Sign in here!
                      </Link>
                    </p>
                  </form>
                </div>
              </div>

              {/* Image Section */}
              <div
                className="hidden md:block w-1/2 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/img/eduriselanding/3d-render-books-fly-fall-blue-background.jpg')",
                }}
              ></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RegisterPage;
