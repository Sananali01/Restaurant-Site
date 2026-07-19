import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { blogPosts } from '../../data/team.js';
import styles from './Blog.module.css';

export default function Blog() {
  const [filter, setFilter] = useState('All');
  const categories = useMemo(() => ['All', ...new Set(blogPosts.map((p) => p.category))], []);
  const filtered = filter === 'All' ? blogPosts : blogPosts.filter((p) => p.category === filter);

  return (
    <>
      <Helmet>
        <title>Blog — Embers</title>
        <meta name="description" content="Recipes, cooking tips, restaurant news, and chef stories from the Embers kitchen." />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">From the Kitchen</span>
          <h1>Blog</h1>
          <p>Recipes, technique notes, and news from behind the pass.</p>
        </div>
      </section>

      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.tabs}>
            {categories.map((c) => (
              <button
                key={c}
                className={`${styles.tab} ${filter === c ? styles.tabActive : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                className={styles.card}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.imgWrap}>
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <span className={styles.tag}>{p.category}</span>
                </div>
                <div className={styles.body}>
                  <span className={styles.date}>{p.date}</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <a href="#" className={styles.readMore}>Read more <FiArrowRight /></a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
