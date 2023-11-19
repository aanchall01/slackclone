import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const styles = {
    input: {
      padding: '10px 15px',
      fontSize: '16px',
      border: '2px solid #ddd',
      borderRadius: '4px',
      width: '100%', 
      boxSizing: 'border-box', 
      marginBottom: '20px', 
      outline: 'none',
    },
    inputFocus: {
      borderColor: '#57aaa0',
    },
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearch}
      style={searchTerm ? { ...styles.input, ...styles.inputFocus } : styles.input}
    />
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
