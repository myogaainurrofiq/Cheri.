// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/AuthContext';
import About from './About';
import Information from './Information';
import Gacha from './Gacha';
import BlushCards from './pages/BlushCards';
import BronzerCards from './pages/BronzerCards';
import EyebrowsCards from './pages/EyebrowsCards';
import EyelinerCards from './pages/EyelinerCards';
import FoundationCards from './pages/FoundationCards';
import MascaraCards from './pages/MascaraCards';
import ProductDetail from './pages/ProductDetail';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Information" element={<Information />} />
        <Route path="/Gacha" element={<Gacha />} />
        <Route path="/BlushCards" element={<BlushCards />} />
        <Route path="/BronzerCards" element={<BronzerCards />} />
        <Route path="/EyebrowsCards" element={<EyebrowsCards />} />
        <Route path="/EyelinerCards" element={<EyelinerCards />} />
        <Route path="/FoundationCards" element={<FoundationCards />} />
        <Route path="/MascaraCards" element={<MascaraCards />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
