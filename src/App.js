import React from 'react';
import { BrowserRouter as Router, } from "react-router-dom";
import Main from './main';

export default function App() {
  return (
    <div>
      <Router>
        <Main/>
      </Router>
    </div>
  );
}
