import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>loading..</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
