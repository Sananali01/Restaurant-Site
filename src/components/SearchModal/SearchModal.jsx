import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';
import { dishes } from '../../data/dishes.js';
import styles from './SearchModal.module.css';

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    if (query.trim().length < 1) return [];
    const q = query.toLowerCase();
    return dishes.filter((d) => d.name.toLowerCase().includes(q) || d.category.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          <motion.div
            className={styles.modal}
            role="dialog"
            aria-label="Search dishes"
            initial={{ opacity: 0, y: -24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.inputRow}>
              <FiSearch />
              <input
                autoFocus
                type="text"
                placeholder="Search dishes, categories..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search dishes"
              />
              <button aria-label="Close search" onClick={onClose}><FiX /></button>
            </div>
            {results.length > 0 && (
              <ul className={styles.results}>
                {results.map((d) => (
                  <li key={d.id}>
                    <Link to="/dishes" onClick={onClose} className={styles.resultLink}>
                      <img src={d.image} alt="" />
                      <div>
                        <span className={styles.resultName}>{d.name}</span>
                        <span className={styles.resultMeta}>{d.category} &middot; ${d.price.toFixed(2)}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {query.trim().length > 0 && results.length === 0 && (
              <p className={styles.noResults}>No dishes match &ldquo;{query}&rdquo;.</p>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
