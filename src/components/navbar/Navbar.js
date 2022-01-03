import React from "react";
import Logo from "../../media/logo.png";
import SortingOptions from "../sortingOptions/SortingOptions";
import useNavbar from "./useNavbar";

function Navbar() {
  const { hide, handleChange, mobileActive, handleHamburguer } = useNavbar();

  return (
    <nav className={`navbar ${hide && "hidden"}`}>
      <img src={Logo} alt="Logo" className="navbar-logo" />
      <ul className="navbar-list">
        <li>
          <input type="text" placeholder="search" />
          <i className="fas fa-search"></i>
        </li>
        <li>
          <label>Sort:</label>
          <SortingOptions onChange={handleChange} />
        </li>
        <li>
          <p>Categories</p>
        </li>
        <li>
          <p>My list</p>
        </li>
      </ul>
      <div className="hamburguer" onClick={handleHamburguer}>
        <i className="fas fa-bars"></i>
      </div>
      <nav className={`mobile-navbar ${mobileActive && "active"}`}>
        <i
          className="fas fa-times mobile-navbar-close"
          onClick={handleHamburguer}
        ></i>
        <img src={Logo} alt="Logo" className="mobile-navbar-logo" />
        <ul>
          <li>
            <input type="text" placeholder="search" />
            <i className="fas fa-search"></i>
          </li>
          <li>
            <label>Sort:</label>
            <SortingOptions onChange={handleChange} />
          </li>
          <li>
            <p>Categories</p>
          </li>
          <li>
            <p>My list</p>
          </li>
        </ul>
      </nav>
    </nav>
  );
}

export default Navbar;
