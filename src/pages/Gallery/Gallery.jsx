import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { galleryImages } from '../../data/team.js';
import styles from './Gallery.module.css';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  // Normalize category strings to prevent space/case mismatch bugs
  const categories = useMemo(() => {
    const rawCategories = galleryImages.map((g) => g.category.trim());
    return ['All', ...new Set(rawCategories)];
  }, []);

  const filtered = useMemo(() => {
    if (filter === 'All') return galleryImages;
    return galleryImages.filter(
      (g) => g.category.trim().toLowerCase() === filter.trim().toLowerCase()
    );
  }, [filter]);

  // Reset lightbox if active filter changes
  const handleFilterChange = (category) => {
    setFilter(category);
    setLightbox(null);
  };

  const openAt = (index) => setLightbox(index);
  const close = () => setLightbox(null);
  const next = () => setLightbox((i) => (i + 1) % filtered.length);
  const prev = () => setLightbox((i) => (i - 1 + filtered.length) % filtered.length);

  return (
    <>
      <Helmet>
        <title>Gallery — Embers</title>
        <meta
          name="description"
          content="A photo tour of the Embers dining room, kitchen, events, and private rooms."
        />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">A Look Inside</span>
          <h1>Gallery</h1>
          <p>The room, the food, the fire — a glimpse of what to expect before you arrive.</p>
        </div>
      </section>

      <section className={`section ${styles.section}`}>
        <div className="container">
          {/* Category Tabs */}
          <div className={styles.tabs}>
            {categories.map((c) => (
              <button
                key={c}
                className={`${styles.tab} ${filter === c ? styles.tabActive : ''}`}
                onClick={() => handleFilterChange(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Gallery Grid with Smooth Layout Transitions */}
          <motion.div layout className={styles.masonry}>
            <AnimatePresence mode="popLayout">
              {filtered.map((g, i) => (
                <motion.button
                  layout
                  key={`${g.id}-${i}`} // Fallback uniqueness to guarantee no key collisions
                  className={styles.tile}
                  onClick={() => openAt(i)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  aria-label={`View ${g.category} photo`}
                >
                  <img src={g.image} alt={g.category} loading="lazy" />
                  <span className={styles.tileLabel}>{g.category}</span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button className={styles.close} onClick={close} aria-label="Close">
              <FiX />
            </button>
            <button
              className={styles.navBtn}
              style={{ left: 24 }}
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
            >
              <FiChevronLeft />
            </button>
            <motion.img
              key={filtered[lightbox].id || lightbox}
              src={filtered[lightbox].image}
              alt={filtered[lightbox].category}
              className={styles.lightboxImg}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <button
              className={styles.navBtn}
              style={{ right: 24 }}
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
            >
              <FiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}