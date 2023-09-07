import { Outlet } from 'react-router-dom';

import Header from './header/header';
// import ToTop from './to-top/to-top';
import Footer from './footer/footer';

import '../constants/colors.css';
import './common.css';
import './layout.css';

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* <ToTop /> */}
    </div>
  );
}

export default Layout;
