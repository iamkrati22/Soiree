import './App.css';
import Header from './components/Commons/Header'
import Footer from './components/Commons/Footer'
import Food from './components/Mains/Food/Food';
import Landing from './components/Mains/Landing/Landing.js';
import Movies from './components/Mains/Movies/Movies';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/food" element={<Food />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
