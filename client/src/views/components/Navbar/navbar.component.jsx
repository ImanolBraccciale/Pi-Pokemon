import React from "react";
import FilterComponent from "../Filter/filterTypes"
import FilterAttack from "../Filter/filterAttack";
import Search from "../Search/search.components";
import FilterName from "../Filter/filterName";
import FilterByOrigin from "../Filter/filterByOrigin";

import { Link } from 'react-router-dom';


function Navbar({ onSearch }) {

  return (
    <>
      <FilterByOrigin />
      <FilterName />
      <FilterAttack />
      <FilterComponent />
      <Search onSearch={onSearch} />
      <Link to="/create">
        <button>Create</button>
      </Link>

    </>
  );
}

export default Navbar;
