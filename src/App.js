import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Units from './pages/Units';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/units">Units Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="units" element={<Units />} />
      </Routes>
    </div>
  );
}

export default App;
