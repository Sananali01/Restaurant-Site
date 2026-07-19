import { motion } from 'framer-motion';
import styles from './OfferCard.module.css';

export default function OfferCard({ offer, index = 0 }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: Math.min(index, 6) * 0.05 }}
      whileHover={{ y: -6 }}
    >
      <div className={styles.imageWrap}>
        <img src={offer.image} alt={offer.title} loading="lazy" />
        <span className={styles.badge}>{offer.tag}</span>
      </div>
      <div className={styles.body}>
        <h4>{offer.title}</h4>
        <p>{offer.description}</p>
        <div className={styles.footRow}>
          <span className={styles.discount}>{offer.discount}</span>
          <span className={styles.valid}>{offer.validUntil}</span>
        </div>
      </div>
    </motion.article>
  );
}
