import { NavLink } from "react-router-dom";
import '/src/navbar.css'

function NavBar() {
    return (
      <nav className="navbar-container">
        <div className="logo-container">
          <p>Logo</p>
        </div>
        <div className="menu-container">
          <NavLink to="/">
            Jukebox
          </NavLink>
          <NavLink to="/">Archive</NavLink>
        </div>
      </nav>
    );
  }

export default NavBar;

