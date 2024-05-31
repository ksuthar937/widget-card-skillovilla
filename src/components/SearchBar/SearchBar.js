import React from "react";

import classes from "./SearchBar.module.css";

const SearchBar = ({ handleChange, value }) => {
  return (
    <section className={classes.outer}>
      <div className={classes.text}>
        <h1>User List</h1>
        <p>Search by name/location</p>
      </div>
      <input
        onChange={handleChange}
        value={value}
        name="username"
        type="text"
        placeholder="Search"
      />
    </section>
  );
};

export default SearchBar;
