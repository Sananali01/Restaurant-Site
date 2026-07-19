import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import styles from './ReviewCard.module.css';

export default function ReviewCard({ review, index = 0 }) {
  const fullStars = Math.round(review.rating);
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: Math.min(index, 6) * 0.05 }}
    >
      <div className={styles.stars} aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar key={i} className={i < fullStars ? styles.filled : styles.empty} />
        ))}
      </div>
      <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
      <div className={styles.author}>
        <div className={styles.avatar}>{review.name.charAt(0)}</div>
        <div>
          <div className={styles.name}>{review.name}</div>
          <div className={styles.role}>{review.role}</div>
        </div>
      </div>
    </motion.article>
  );
}
