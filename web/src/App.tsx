import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import { LoadingProvider } from './context/LoadingContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import GlobalLoader from './components/GlobalLoader';

// Direct imports for once-off loading experience
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import Resume from './pages/Resume';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Community from './pages/Community';
import Documents from './pages/Documents';
import NotFound from './pages/NotFound';

// Hide the instant HTML loader when React takes over
const hideInstantLoader = () => {
  const instantLoader = document.getElementById('instant-loader');
  if (instantLoader) {
    instantLoader.classList.add('fade-out');
    setTimeout(() => {
      instantLoader.remove();
      // Also remove the inline styles
      const styles = document.getElementById('instant-loader-styles');
      if (styles) styles.remove();
    }, 300);
  }
};

function App() {
  const [isSiteReady, setIsSiteReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  // Hide instant loader when GlobalLoader mounts
  useEffect(() => {
    // Small delay to ensure React has rendered the GlobalLoader
    const timer = setTimeout(() => {
      hideInstantLoader();
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleLoaderDone = () => {
    setShowLoader(false);
    // Small delay to allow exit animation
    setTimeout(() => {
      setIsSiteReady(true);
    }, 100);
  };

  return (
    <LanguageProvider>
      <LoadingProvider>
        {/* GlobalLoader - takes over from instant loader */}
        <AnimatePresence mode="wait">
          {showLoader && (
            <GlobalLoader key="preloader" onDone={handleLoaderDone} />
          )}
        </AnimatePresence>

        {/* Main app - render hidden for preloading, show when ready */}
        <div style={{
          visibility: isSiteReady ? 'visible' : 'hidden',
          opacity: isSiteReady ? 1 : 0,
          transition: 'opacity 0.3s ease-out'
        }}>
          <HashRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="project/:id" element={<ProjectDetail />} />
                <Route path="services" element={<Services />} />
                <Route path="resume" element={<Resume />} />
                <Route path="documents" element={<Documents />} />
                <Route path="media" element={<Media />} />
                <Route path="community" element={<Community />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </HashRouter>
        </div>
      </LoadingProvider>
    </LanguageProvider>
  );
}

export default App;
