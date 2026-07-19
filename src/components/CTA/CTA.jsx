import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './CTA.module.css';

export default function CTA({
  eyebrow = 'Reserve Your Table',
  title = 'An evening worth planning for',
  subtitle = 'Tables move quickly on weekends — book ahead to guarantee your time.',
  primary = { to: '/reservation', label: 'Book a Table' },
  secondary = { to: '/menu', label: 'View Menu' },
}) {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className={styles.panel}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className={styles.actions}>
            <Link to={primary.to} className="btn btn-primary">{primary.label}</Link>
            {secondary && <Link to={secondary.to} className={`btn btn-outline ${styles.outlineOnDark}`}>{secondary.label}</Link>}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
