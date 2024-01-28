import { NavLink } from "react-router-dom";
import writemindLogo from '/public/writemind.svg'
import './NavBar.css'
import { FaVolumeMute } from "react-icons/fa";

function NavBar() {
    return (
      <>
      <nav className="navbar-container">
        <img src={writemindLogo} className="logo" alt="WriteMind Logo" />
        <div className="menu-container">
          <button className="jukebox-button">
            <NavLink to="/">Jukebox</NavLink>
          </button>
          <button className="archive-button">
            <NavLink to="/">Archive</NavLink>
          </button>
          <button className="mute-button">
            <FaVolumeMute></FaVolumeMute>
          </button>
        </div>
      </nav>
      </>
    );
  }

export default NavBar;

