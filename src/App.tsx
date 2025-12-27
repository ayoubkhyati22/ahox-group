import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/Home';
import LocationPage from './pages/LocationPage';
// import ConstructionPage from './pages/ConstructionPage';
import RealEstatePage from './pages/RealEstatePage';
import SecurityPage from './pages/SecurityPage';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'darija' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <Router>
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
          {/* <Route path="/construction" element={<ConstructionPage />} /> */}
          <Route path="/real-estate" element={<RealEstatePage />} />
          <Route path="/security" element={<SecurityPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;