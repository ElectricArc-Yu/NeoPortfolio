import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';
import Media from './pages/Media';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';

import Documents from './pages/Documents';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="project/:id" element={<ProjectDetail />} />
              <Route path="resume" element={<Resume />} />
              <Route path="documents" element={<Documents />} />
              <Route path="media" element={<Media />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
