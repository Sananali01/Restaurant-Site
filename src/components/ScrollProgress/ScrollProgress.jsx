import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './ScrollProgress.module.css';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });
  return <motion.div className={styles.bar} style={{ scaleX }} />;
}
