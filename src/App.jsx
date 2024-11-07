import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Corrected import for routing
import './App.css';
import Home from './components/Home';  // Import components
import AboutBusiness from './components/Aboutbusiness';
import Product from './components/Product';
import Store from './components/Store';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define Routes for each page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutbusiness" element={<AboutBusiness />} />
          <Route path="/product" element={<Product />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
