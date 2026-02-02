import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import Resume from './pages/Resume';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Community from './pages/Community';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';

import Documents from './pages/Documents';

function App() {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}

export default App;
