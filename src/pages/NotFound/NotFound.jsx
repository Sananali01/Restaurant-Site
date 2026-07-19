import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiHome } from 'react-icons/fi';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — Embers</title>
      </Helmet>
      <section className={styles.section}>
        <div className="container">
          <motion.div
            className={styles.wrap}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.code}>404</span>
            <h1>This table isn&rsquo;t set.</h1>
            <p>The page you&rsquo;re looking for has been moved, renamed, or never existed.</p>
            <Link to="/" className="btn btn-primary"><FiHome /> Back to Home</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
