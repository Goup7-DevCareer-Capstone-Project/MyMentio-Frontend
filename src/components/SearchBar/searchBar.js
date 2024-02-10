import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchTerm); // Implement the search functionality
  };

  return (
    <form onSubmit={handleSearch} id='search'>
      <input
        type="text"
        placeholder="Search based on your diagnostics"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

