import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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

function App() {
  const [isSiteReady, setIsSiteReady] = useState(false);

  return (
    <LanguageProvider>
      <LoadingProvider>
        <AnimatePresence mode="wait">
          {!isSiteReady && (
            <GlobalLoader key="preloader" onDone={() => setIsSiteReady(true)} />
          )}
        </AnimatePresence>

        {isSiteReady && (
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
        )}
      </LoadingProvider>
    </LanguageProvider>
  );
}

export default App;
