import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import styles from './FAQAccordion.module.css';

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className={styles.list}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <motion.span
                className={styles.icon}
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiPlus />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={styles.answerWrap}
                >
                  <p className={styles.answer}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
