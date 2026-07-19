import { motion } from 'framer-motion';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <motion.div
      className={styles.loader}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <motion.div
        className={styles.mark}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className={styles.flame} aria-hidden="true" />
        <span className={styles.word}>Embers</span>
      </motion.div>
      <motion.div
        className={styles.bar}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}
