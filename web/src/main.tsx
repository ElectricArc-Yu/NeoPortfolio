import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Prevent right-click and copy
window.addEventListener('contextmenu', (e) => e.preventDefault());
window.addEventListener('copy', (e) => e.preventDefault());
window.addEventListener('keydown', (e) => {
  // Prevent Ctrl+C, Ctrl+Shift+I, etc.
  if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
    e.preventDefault();
  }
});

