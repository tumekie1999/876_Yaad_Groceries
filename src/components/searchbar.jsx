import React from 'react'
import './searchbar.css';

const SearchBar = () => {
    return (
      <div className='searchbar'>
        <div className='input'>
            <input type="text" placeholder="Search..." size={70}/>
        </div>
        <div className='button'>
            <button >Search</button>
        </div>
      </div>
    );
  };
  
export default SearchBar;

