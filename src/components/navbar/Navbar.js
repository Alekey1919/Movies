import React from "react";
import Logo from "../../media/logo.png";
import SortingOptions from "../sortingOptions/SortingOptions";
import useNavbar from "./useNavbar";
import { connect } from "react-redux";
import MyListItem from "../myListItem/MyListItem";

function Navbar({ myList }) {
  const {
    hide,
    handleChange,
    mobileActive,
    handleHamburguer,
    toggleMyList,
    myListVisible,
    myListState,
  } = useNavbar(myList);

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
          <p onClick={toggleMyList}>My list</p>
          <div className={`my-list ${myListVisible ? "active" : null}`}>
            <ul>
              {myListState &&
                myListState.length >= 1 &&
                myListState.map((movie) => {
                  return (
                    <MyListItem
                      key={movie.id}
                      title={movie.title}
                      img={movie.poster_path}
                      id={movie.id}
                    />
                  );
                })}
            </ul>
          </div>
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

const mapStateToProps = (state) => {
  return {
    myList: state.myList.myList,
  };
};

export default connect(mapStateToProps)(Navbar);
