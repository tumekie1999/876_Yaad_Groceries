import React from 'react';
import './searchbar.css';

export default function Searchbar() {
    return (
        <div className='searchbar'>
            <div className='input-container'>
                <input 
                    type="text" 
                    placeholder="Search..." 
                />
                <button>Search</button>
            </div>
        </div>
    );
}
