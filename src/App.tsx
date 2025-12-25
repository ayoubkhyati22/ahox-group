import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/Home';
import LocationPage from './pages/LocationPage';

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
          <Route path="/casablanca" element={<LocationPage location="casablanca" />} />
          <Route path="/dubai" element={<LocationPage location="dubai" />} />
          <Route path="/frankfurt" element={<LocationPage location="frankfurt" />} />
          <Route path="/pristina" element={<LocationPage location="pristina" />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
