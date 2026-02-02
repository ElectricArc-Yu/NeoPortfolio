import { HashRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { LoadingProvider } from './context/LoadingContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for performance optimization
const Home = lazy(() => import('./pages/Home'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Services = lazy(() => import('./pages/Services'));
const Resume = lazy(() => import('./pages/Resume'));
const Media = lazy(() => import('./pages/Media'));
const Contact = lazy(() => import('./pages/Contact'));
const Community = lazy(() => import('./pages/Community'));
const Documents = lazy(() => import('./pages/Documents'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback with spinner
const PageLoader = () => (
  <LoadingSpinner 
    fullScreen 
    size="large" 
    text="Loading page..." 
  />
);

function App() {
  return (
    <LanguageProvider>
      <LoadingProvider>
        <HashRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </HashRouter>
      </LoadingProvider>
    </LanguageProvider>
  );
}

export default App;
