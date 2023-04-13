import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Salesforce from './components/Salesforce';
import CanvasUi from './components/CanvasUi';

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/salesforce">Salesforce</Link>
              </li>
              <li>
                <a href="https://trust.salesforce.com/" target="_blank" rel="noopener noreferrer">Trust</a>
              </li>
              <li>
                <Link to="/CanvasUi">Canvas</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/salesforce" element={<Salesforce />} />
            <Route path="/" element={<Home />} />
            <Route path="/CanvasUi" element={<CanvasUi />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;