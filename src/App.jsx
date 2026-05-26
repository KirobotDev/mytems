import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import CodeShowcase from './components/CodeShowcase';
import Footer from './components/Footer';
import { CGU, MentionsLegales, PolitiqueConfidentialite } from './components/Legal';

function MainLayout() {
  return (
    <div className="app">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <CodeShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<PolitiqueConfidentialite />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
