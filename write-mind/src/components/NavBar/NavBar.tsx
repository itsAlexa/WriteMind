import { NavLink } from "react-router-dom";
import writemindLogo from '/public/writemind.svg'
import '/src/navbar.css'

function NavBar() {
    return (
      <nav className="navbar-container">
        <img src={writemindLogo} className="logo" alt="WriteMind Logo" />
        <div className="menu-container">
          <button className="jukebox-button">
            <NavLink to="/">Jukebox</NavLink>
          </button>
          <button className="archive-button">
            <NavLink to="/">Archive</NavLink>
          </button>
        </div>
      </nav>
    );
  }

export default NavBar;

