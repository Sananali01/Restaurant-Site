import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import styles from './ChefCard.module.css';

export default function ChefCard({ chef, index = 0 }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: Math.min(index, 6) * 0.06 }}
      whileHover={{ y: -6 }}
    >
      <div className={styles.imageWrap}>
        <img src={chef.image} alt={chef.name} loading="lazy" />
      </div>
      <div className={styles.body}>
        <span className={styles.role}>{chef.role}</span>
        <h4>{chef.name}</h4>
        <p className={styles.specialty}>{chef.specialty} &middot; {chef.experience}</p>
        <p className={styles.bio}>{chef.bio}</p>
        <ul className={styles.awards}>
          {chef.awards.map((a) => (
            <li key={a}><FiAward /> {a}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
