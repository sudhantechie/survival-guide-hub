import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import GettingStarted from './pages/GettingStarted';
import Planning from './pages/Planning';
import TropicalEnv from './pages/TropicalEnv';  // Import the component for Tropical environment
import TemperateEnv from './pages/TemperateEnv';  // Import the component for Temperate environment
import MountainEnv from './pages/MountainEnv';  // Import the component for Mountain environment
import DesertEnv from './pages/DesertEnv';  // Import the component for Desert environment
import ColdEnv from './pages/ColdEnv';  // Import the component for Cold environment
import MarineEnv from './pages/MarineEnv';  // Import the component for Marine environment
import SurvivalTips from './pages/SurvivalTips';
import SurvivalKit from './pages/SurvivalKit'; 





function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gettingstarted" element={<GettingStarted />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/tropical-env" element={<TropicalEnv />} />
          <Route path="/temperate-env" element={<TemperateEnv />} />
          <Route path="/mountain-env" element={<MountainEnv />} />
          <Route path="/desert-env" element={<DesertEnv />} />
          <Route path="/cold-env" element={<ColdEnv />} />
          <Route path="/marine-env" element={<MarineEnv />} />
          <Route path="/survival-tips" element={<SurvivalTips />} />
          <Route path="/survival-kit" element={<SurvivalKit />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
