import Navbar from './Navbar';
import ThemeProvider from './providers/Theme';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Root() {
  return (
    <>
      <ThemeProvider>
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
