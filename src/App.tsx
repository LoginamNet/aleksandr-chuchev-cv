import { Routes, Route } from 'react-router-dom';

import Layout from './layout/layout';
import CVMain from './pages/cv/cv';
import NotFound from './pages/not-found/not-fount';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CVMain />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
