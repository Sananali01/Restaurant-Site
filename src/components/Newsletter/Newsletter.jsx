import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import styles from './Newsletter.module.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail('');
  };

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className={styles.panel}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.text}>
            <span className="eyebrow">Stay in the Loop</span>
            <h2>Seasonal menus, first.</h2>
            <p>Join our table list for new dishes, chef events, and offers before anyone else hears about them.</p>
          </div>
          {sent ? (
            <div className={styles.success}><FiCheck /> You&rsquo;re subscribed — welcome to the table.</div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
