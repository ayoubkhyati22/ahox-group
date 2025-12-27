import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Option 2: Radial arc menu
import FloatingContactButtonAlt from './components/FloatingContactButtonAlt';

import HomePage from './pages/Home';
import LocationPage from './pages/LocationPage';
import ConstructionManagementPage from './pages/ConstructionManagementPage';
import RealEstatePage from './pages/RealEstatePage';
import SecurityPage from './pages/SecurityPage';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'darija' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Location Pages */}
          <Route path="/casablanca" element={<LocationPage location="casablanca" />} />
          <Route path="/dubai" element={<LocationPage location="dubai" />} />
          <Route path="/frankfurt" element={<LocationPage location="frankfurt" />} />
          <Route path="/pristina" element={<LocationPage location="pristina" />} />
          
          {/* Service Pages */}
          <Route path="/construction" element={<ConstructionManagementPage />} />
          <Route path="/real-estate" element={<RealEstatePage />} />
          <Route path="/security" element={<SecurityPage />} />
        </Routes>
        
        <Footer />
        
        {/* Floating Contact Button - Shows on ALL pages */}
        <FloatingContactButtonAlt />
      </div>
    </Router>
  );
}

export default App;