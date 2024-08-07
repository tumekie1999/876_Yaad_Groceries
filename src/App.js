import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";
import Main from './Main'; // Import the new Main component

function App() {
  const [results, setResults] = useState([]);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Main setResults={setResults} setIsSearchPerformed={setIsSearchPerformed} results={results} isSearchPerformed={isSearchPerformed} />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
