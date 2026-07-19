import { Helmet } from 'react-helmet-async';
import CategoryCard from '../../components/CategoryCard/CategoryCard.jsx';
import { categories } from '../../data/categories.js';
import styles from './Categories.module.css';

export default function Categories() {
  return (
    <>
      <Helmet>
        <title>Categories — Embers</title>
        <meta name="description" content="Browse every menu category at Embers, from breakfast to cocktails." />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Browse by Craving</span>
          <h1>Categories</h1>
          <p>Fifteen collections, one kitchen — pick a mood and we&rsquo;ll take it from there.</p>
        </div>
      </section>

      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.grid}>
            {categories.map((c, i) => <CategoryCard key={c.id} category={c} index={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}
