import FilterComponent from "../Filter/filterTypes"
import FilterAttack from "../Filter/filterAttack";
import Search from "../Search/search.components";
import React from "react";
import FilterName from "../Filter/filterName";
function Navbar({ onSearch }) {

  return (
    <>
      <FilterName />
      <FilterAttack />
      <FilterComponent />
      <Search onSearch={onSearch} />
    </>
  );
}

export default Navbar;
