import React from 'react';
import './searchpage.css';

export const Searchpage = ({ results }) => {
  return (
    <div className='results'>
      {results.length > 0 ? (
        <ul>
            <h2>Results</h2>
          {results.map(product => (
            <li key={product.id}>
              <img src={product.productImage} alt={product.productName} width={150} height={150} />
              <div>
                <h3>{product.productName}</h3>
                <p>${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};
