import React from 'react';
import './SearchBar.styles.css';

const SearchBar = ({ inputSearch, handleSubmit, handleChange }) => {
  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="inputSearch"
          value={inputSearch}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
