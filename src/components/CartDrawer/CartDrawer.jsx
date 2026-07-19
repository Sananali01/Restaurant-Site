import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../../context/CartContext.jsx';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQty, removeItem, totals } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <motion.aside
            className={styles.drawer}
            role="dialog"
            aria-label="Shopping cart"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.header}>
              <h3>Your Cart ({totals.count})</h3>
              <button aria-label="Close cart" onClick={() => setIsOpen(false)}><FiX /></button>
            </div>

            {items.length === 0 ? (
              <div className={styles.empty}>
                <p>Your cart is empty.</p>
                <Link to="/dishes" className="btn btn-primary" onClick={() => setIsOpen(false)}>Browse Dishes</Link>
              </div>
            ) : (
              <>
                <div className={styles.items}>
                  {items.map((item) => (
                    <div key={item.id} className={styles.item}>
                      <img src={item.image} alt={item.name} />
                      <div className={styles.itemBody}>
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
                        <div className={styles.qtyRow}>
                          <button aria-label="Decrease quantity" onClick={() => updateQty(item.id, item.qty - 1)}><FiMinus /></button>
                          <span>{item.qty}</span>
                          <button aria-label="Increase quantity" onClick={() => updateQty(item.id, item.qty + 1)}><FiPlus /></button>
                          <button className={styles.removeBtn} aria-label={`Remove ${item.name}`} onClick={() => removeItem(item.id)}>
                            <FiTrash2 />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.footer}>
                  <div className={styles.row}>
                    <span>Subtotal</span>
                    <span>${totals.subtotal.toFixed(2)}</span>
                  </div>
                  <Link to="/cart" className="btn btn-outline" onClick={() => setIsOpen(false)}>View Cart</Link>
                  <Link to="/checkout" className="btn btn-primary" onClick={() => setIsOpen(false)}>Checkout</Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
