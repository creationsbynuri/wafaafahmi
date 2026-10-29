import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import Team from './pages/Team';
import Klassen from './pages/Klassen';
import Kurse from './pages/Kurse';
import Preise from './pages/Preise';
import Kontakt from './pages/Kontakt';
import Erfolge from './pages/Erfolge';
import Datenschutz from './pages/Datenschutz';
import Impressum from './pages/Impressum';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/klassen" element={<Klassen />} />
            <Route path="/kurse" element={<Kurse />} />
            <Route path="/preise" element={<Preise />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/erfolge" element={<Erfolge />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </div>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
