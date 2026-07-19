import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './CategoryCard.module.css';

export default function CategoryCard({ category, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: Math.min(index, 6) * 0.05 }}
    >
      <Link to="/menu" className={styles.card}>
        <img src={category.image} alt={category.name} loading="lazy" className={styles.image} />
        <div className={styles.overlay} />
        <div className={styles.content}>
          <span className={styles.tagline}>{category.tagline}</span>
          <h4>{category.name}</h4>
        </div>
        <span className={styles.arrow}><FiArrowUpRight /></span>
      </Link>
    </motion.div>
  );
}
