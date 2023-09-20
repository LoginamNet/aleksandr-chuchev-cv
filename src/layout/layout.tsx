import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header/header';
import Footer from './footer/footer';

import '../constants/colors.css';
import './common.css';
import './layout.css';
import Preloader from '../components/preloader/preloader';

export type ContextType = { pageLoadHandler: () => void };

function Layout() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  return (
    <div className="layout">
      {!isPageLoaded && <Preloader />}
      <Header />
      <main>
        <Outlet context={setIsPageLoaded} />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
