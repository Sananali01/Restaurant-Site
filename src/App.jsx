import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Loader from './components/Loader/Loader.jsx';
import ScrollProgress from './components/ScrollProgress/ScrollProgress.jsx';
import BackToTop from './components/BackToTop/BackToTop.jsx';
import CartDrawer from './components/CartDrawer/CartDrawer.jsx';
import SearchModal from './components/SearchModal/SearchModal.jsx';
import PageTransition from './components/PageTransition/PageTransition.jsx';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const About = lazy(() => import('./pages/About/About.jsx'));
const Menu = lazy(() => import('./pages/Menu/Menu.jsx'));
const Dishes = lazy(() => import('./pages/Dishes/Dishes.jsx'));
const Categories = lazy(() => import('./pages/Categories/Categories.jsx'));
const Chefs = lazy(() => import('./pages/Chefs/Chefs.jsx'));
const Reservation = lazy(() => import('./pages/Reservation/Reservation.jsx'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery.jsx'));
const Testimonials = lazy(() => import('./pages/Testimonials/Testimonials.jsx'));
const Offers = lazy(() => import('./pages/Offers/Offers.jsx'));
const Blog = lazy(() => import('./pages/Blog/Blog.jsx'));
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'));
const FAQ = lazy(() => import('./pages/FAQ/FAQ.jsx'));
const Cart = lazy(() => import('./pages/Cart/Cart.jsx'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout.jsx'));
const OrderSuccess = lazy(() => import('./pages/OrderSuccess/OrderSuccess.jsx'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound.jsx'));

export default function App() {
  const location = useLocation();
  const [initialLoad, setInitialLoad] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInitialLoad(false), 1100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <AnimatePresence>{initialLoad && <Loader key="loader" />}</AnimatePresence>
      <ScrollProgress />
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer />
      <main id="main-content">
        <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/menu" element={<PageTransition><Menu /></PageTransition>} />
              <Route path="/dishes" element={<PageTransition><Dishes /></PageTransition>} />
              <Route path="/categories" element={<PageTransition><Categories /></PageTransition>} />
              <Route path="/chefs" element={<PageTransition><Chefs /></PageTransition>} />
              <Route path="/reservation" element={<PageTransition><Reservation /></PageTransition>} />
              <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
              <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
              <Route path="/offers" element={<PageTransition><Offers /></PageTransition>} />
              <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
              <Route path="/cart" element={<PageTransition><Cart /></PageTransition>} />
              <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
              <Route path="/order-success" element={<PageTransition><OrderSuccess /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
