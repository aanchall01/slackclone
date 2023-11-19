import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // Define the prop type
};

export default SearchBar;
