import React, { useState } from 'react';
import './searchbar.css';
import { PRODUCTS } from '../products'; // Adjust the import path as necessary

const SearchBar = ({ setResults, setIsSearchPerformed }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setResults([]);
      setIsSearchPerformed(false);
    } else {
      const filteredItems = PRODUCTS.filter(product =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredItems);
      setIsSearchPerformed(true);
    }
  };

  return (
    <div className='searchbar'>
      <div className='input'>
        <input 
          type="text" 
          placeholder="Search..." 
          size={71}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='button'>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
