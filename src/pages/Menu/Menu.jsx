import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import DishCard from '../../components/DishCard/DishCard.jsx';
import { dishes } from '../../data/dishes.js';
import { menuCategories } from '../../data/categories.js';
import styles from './Menu.module.css';

export default function Menu() {
  const [active, setActive] = useState('All');

  const available = useMemo(() => {
    const present = new Set(dishes.map((d) => d.category));
    return menuCategories.filter((c) => present.has(c));
  }, []);

  const filtered = useMemo(
    () => (active === 'All' ? dishes : dishes.filter((d) => d.category === active)),
    [active]
  );

  return (
    <>
      <Helmet>
        <title>Menu — Embers</title>
        <meta name="description" content="Browse the full Embers menu across breakfast, lunch, dinner, and every cuisine we serve." />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">The Full Menu</span>
          <h1>Every category, one kitchen</h1>
          <p>From wood-fired mains to fresh-pressed juices — browse by category or view everything at once.</p>
        </div>
      </section>

      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.tabs} role="tablist" aria-label="Menu categories">
            <button
              className={`${styles.tab} ${active === 'All' ? styles.tabActive : ''}`}
              onClick={() => setActive('All')}
              role="tab"
              aria-selected={active === 'All'}
            >
              All
            </button>
            {available.map((c) => (
              <button
                key={c}
                className={`${styles.tab} ${active === c ? styles.tabActive : ''}`}
                onClick={() => setActive(c)}
                role="tab"
                aria-selected={active === c}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className={styles.grid}>
            {filtered.map((d, i) => <DishCard key={d.id} dish={d} index={i % 8} />)}
          </motion.div>

          {filtered.length === 0 && <p className={styles.empty}>No dishes in this category yet.</p>}
        </div>
      </section>
    </>
  );
}
