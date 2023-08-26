// Navbar.js
import React from "react";
import FilterComponent from "../Filter/filterTypes";
import FilterAttack from "../Filter/filterAttack";
import Search from "../Search/search.components";
import FilterName from "../Filter/filterName";
import FilterByOrigin from "../Filter/filterByOrigin";
import { Link } from "react-router-dom";
import "./navBar.css";

function Navbar({ onSearch }) {
  return (
    <div className="navbar">
      <FilterByOrigin className="navbar-item" />
      <FilterName className="navbar-item" />
      <FilterAttack className="navbar-item" />
      <FilterComponent className="navbar-item" />
      <Search onSearch={onSearch} className="navbar-item" />
      <Link to="/create" className="create-button navbar-item">
        Create
      </Link>
    </div>
  );
}

export default Navbar;
