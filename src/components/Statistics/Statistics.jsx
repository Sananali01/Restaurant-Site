import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import styles from './Statistics.module.css';

const STATS = [
  { label: 'Years of Craft', value: 18, suffix: '' },
  { label: 'Signature Dishes', value: 52, suffix: '+' },
  { label: 'Happy Guests', value: 42000, suffix: '+' },
  { label: 'Awards Won', value: 12, suffix: '' },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={styles.number}>
      {display.toLocaleString()}{suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className={styles.item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Counter value={s.value} suffix={s.suffix} />
            <span className={styles.label}>{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
