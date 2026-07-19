import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiHeart, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import { useCart } from '../../context/CartContext.jsx';
import { useFavorites } from '../../context/FavoritesContext.jsx';
import styles from './Navbar.module.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/dishes', label: 'Dishes' },
  { to: '/categories', label: 'Categories' },
  { to: '/chefs', label: 'Chefs' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reservation', label: 'Reservation' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar({ onSearchOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totals, setIsOpen } = useCart();
  const { favorites } = useFavorites();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} aria-label="Embers home">
          <span className={styles.flame} aria-hidden="true" />
          <span className={styles.brandText}>Embers</span>
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && <motion.span layoutId="nav-indicator" className={styles.indicator} />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search" onClick={onSearchOpen}>
            <FiSearch />
          </button>
          <Link className={styles.iconBtn} to="/dishes" aria-label={`Favorites (${favorites.length})`}>
            <FiHeart />
            {favorites.length > 0 && <span className={styles.badge}>{favorites.length}</span>}
          </Link>
          <button className={styles.iconBtn} aria-label={`Cart (${totals.count} items)`} onClick={() => setIsOpen(true)}>
            <FiShoppingBag />
            {totals.count > 0 && <span className={styles.badge}>{totals.count}</span>}
          </button>
          <Link to="/reservation" className={`btn btn-outline book-button ${styles.deskOnly}`}>Book Table</Link>
          <Link to="/menu" className={`btn btn-primary order-button ${styles.deskOnly}`}>Order Online</Link>
          <button
            className={styles.iconBtn}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.mobileLinks}>
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  <NavLink to={l.to} end={l.to === '/'} className={styles.mobileLink}>
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <div className={styles.mobileActions}>
                <Link to="/reservation" className="btn btn-outline">Book Table</Link>
                <Link to="/menu" className="btn btn-primary">Order Online</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
