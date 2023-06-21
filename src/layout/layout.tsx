import { Outlet } from 'react-router-dom';

import Header from './header/header';
import Footer from './footer/footer';

import '../constants/colors.css';
import './layout.css';

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
