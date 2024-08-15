import React from 'react';
import './searchbar.css';

export default function Searchbar() {
    return (
        <div className='searchbar'>
            <div className='input'>
            <input 
                type="text" 
                placeholder="Search..." 
                size={71}
            />
            </div>
            <div className='button'>
            <button>Search</button>
            </div>
        </div>
    );
}