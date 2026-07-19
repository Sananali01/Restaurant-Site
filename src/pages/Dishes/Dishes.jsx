import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';
import DishCard from '../../components/DishCard/DishCard.jsx';
import { dishes } from '../../data/dishes.js';
import { menuCategories } from '../../data/categories.js';
import styles from './Dishes.module.css';

const PRICE_MAX = 35;

export default function Dishes() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX);
  const [veg, setVeg] = useState(false);
  const [spicy, setSpicy] = useState(false);
  const [popular, setPopular] = useState(false);
  const [chefPick, setChefPick] = useState(false);

  const categoriesPresent = useMemo(() => ['All', ...new Set(dishes.map((d) => d.category))], []);

  const filtered = useMemo(() => {
    return dishes.filter((d) => {
      if (query && !d.name.toLowerCase().includes(query.toLowerCase())) return false;
      if (category !== 'All' && d.category !== category) return false;
      if (d.price > maxPrice) return false;
      if (veg && !d.vegetarian) return false;
      if (spicy && !d.spicy) return false;
      if (popular && !d.popular) return false;
      if (chefPick && !d.chefRecommended) return false;
      return true;
    });
  }, [query, category, maxPrice, veg, spicy, popular, chefPick]);

  const resetFilters = () => {
    setQuery(''); setCategory('All'); setMaxPrice(PRICE_MAX);
    setVeg(false); setSpicy(false); setPopular(false); setChefPick(false);
  };

  return (
    <>
      <Helmet>
        <title>Dishes — Embers</title>
        <meta name="description" content="52 signature dishes at Embers, searchable and filterable by category, price, and diet." />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">52 Signature Dishes</span>
          <h1>Every dish, one page</h1>
          <p>Search, filter, and add straight to your cart.</p>
        </div>
      </section>

      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.toolbar}>
            <div className={styles.searchBox}>
              <FiSearch />
              <input
                type="text"
                placeholder="Search dishes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search dishes"
              />
              {query && <button aria-label="Clear search" onClick={() => setQuery('')}><FiX /></button>}
            </div>

            <select value={category} onChange={(e) => setCategory(e.target.value)} className={styles.select} aria-label="Filter by category">
              {categoriesPresent.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>

            <label className={styles.priceLabel}>
              Under ${maxPrice}
              <input
                type="range"
                min="5"
                max={PRICE_MAX}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                aria-label="Maximum price"
              />
            </label>

            <div className={styles.toggles}>
              <label className={styles.toggle}>
                <input type="checkbox" checked={veg} onChange={(e) => setVeg(e.target.checked)} /> Vegetarian
              </label>
              <label className={styles.toggle}>
                <input type="checkbox" checked={spicy} onChange={(e) => setSpicy(e.target.checked)} /> Spicy
              </label>
              <label className={styles.toggle}>
                <input type="checkbox" checked={popular} onChange={(e) => setPopular(e.target.checked)} /> Popular
              </label>
              <label className={styles.toggle}>
                <input type="checkbox" checked={chefPick} onChange={(e) => setChefPick(e.target.checked)} /> Chef&rsquo;s Pick
              </label>
            </div>

            <button className={styles.reset} onClick={resetFilters}>Reset</button>
          </div>

          <p className={styles.count}>{filtered.length} dish{filtered.length === 1 ? '' : 'es'}</p>

          <motion.div layout className={styles.grid}>
            {filtered.map((d, i) => <DishCard key={d.id} dish={d} index={i % 8} />)}
          </motion.div>

          {filtered.length === 0 && (
            <div className={styles.empty}>
              <p>No dishes match your filters.</p>
              <button className="btn btn-outline" onClick={resetFilters}>Clear Filters</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
