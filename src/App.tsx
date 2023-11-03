import { Routes, Route } from 'react-router-dom';

import Layout from './layout/layout';
import CVMain from './pages/cv/cv';
import Projects from './pages/projects/projects';
import PrivacyPolicy from './pages/privacy-policy/privacy-policy';
import NotFound from './pages/not-found/not-fount';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CVMain />} />
        <Route path="projects" element={<Projects />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
