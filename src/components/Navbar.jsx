import { Link } from "react-router-dom";
import logo from "/img/logo.svg";
import userIcon from "/img/user.png";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />

      {/* Home */}
      <Link to="/">Home</Link>

      {/* Halaman utama Scholarship Hub */}
      <Link to="/scholarshiphub">Scholarship Hub</Link>

      {/* Halaman Eduprep Tools */}
      <Link to="/eduprep-tools">Eduprep Tools</Link>

      {/* Halaman lain */}

      <a href="#">Edurise Academy</a>
      <a href="#">Edu Events</a>
      <a href="#">Edu Connect</a>

      {/* Ikon user */}
      <a href="/profile">
        <img src={userIcon} alt="User" className="user-icon" />
      </a>
    </nav>
  );
};

export default Navbar;
