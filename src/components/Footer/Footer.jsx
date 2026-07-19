import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiTwitter, FiSend } from 'react-icons/fi';
import { categories } from '../../data/categories.js';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail('');
  };

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`container ${styles.top}`}>
        <div className={styles.about}>
          <Link to="/" className={styles.brand}>
            <span className={styles.flame} aria-hidden="true" />
            <span>Embers</span>
          </Link>
          <p>Modern fire &amp; table. Seasonal ingredients, wood-fired technique, and a room built for slow evenings.</p>
          <div className={styles.social}>
            <a href="#" aria-label="Instagram"><FiInstagram /></a>
            <a href="#" aria-label="Facebook"><FiFacebook /></a>
            <a href="#" aria-label="Twitter"><FiTwitter /></a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/chefs">Chefs</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Categories</h4>
          <ul>
            {categories.slice(0, 6).map((c) => (
              <li key={c.id}><Link to="/categories">{c.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Opening Hours</h4>
          <ul className={styles.hours}>
            <li><span>Mon – Thu</span><span>11:00 – 22:00</span></li>
            <li><span>Fri – Sat</span><span>11:00 – 23:30</span></li>
            <li><span>Sunday</span><span>10:00 – 21:00</span></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Newsletter</h4>
          <p>Seasonal menus and offers, once or twice a month.</p>
          <form className={styles.newsletter} onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <button type="submit" aria-label="Subscribe"><FiSend /></button>
          </form>
          {sent && <span className={styles.sent}>You&rsquo;re on the list.</span>}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <span>&copy; {new Date().getFullYear()} Embers Restaurant. All rights reserved.</span>
          <button
            className={styles.toTop}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
