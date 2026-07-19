import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiMinus, FiPlus, FiTrash2, FiTag } from 'react-icons/fi';
import { useCart } from '../../context/CartContext.jsx';
import styles from './Cart.module.css';

export default function Cart() {
  const { items, updateQty, removeItem, totals, applyCoupon, coupon } = useCart();
  const [code, setCode] = useState('');
  const [couponMsg, setCouponMsg] = useState(null);
  const navigate = useNavigate();

  const handleApply = (e) => {
    e.preventDefault();
    if (!code.trim()) return;
    const result = applyCoupon(code);
    setCouponMsg(result.ok ? 'Coupon applied!' : 'Invalid or expired code.');
  };

  return (
    <>
      <Helmet>
        <title>Cart — Embers</title>
        <meta name="description" content="Review your order before checkout." />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Your Order</span>
          <h1>Shopping Cart</h1>
        </div>
      </section>

      <section className={`section ${styles.section}`}>
        <div className="container">
          {items.length === 0 ? (
            <div className={styles.empty}>
              <p>Your cart is empty right now.</p>
              <Link to="/dishes" className="btn btn-primary">Browse Dishes</Link>
            </div>
          ) : (
            <div className={styles.grid}>
              <div className={styles.list}>
                {items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    className={styles.row}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                  >
                    <img src={item.image} alt={item.name} />
                    <div className={styles.rowBody}>
                      <span className={styles.name}>{item.name}</span>
                      <span className={styles.price}>${item.price.toFixed(2)} each</span>
                    </div>
                    <div className={styles.qty}>
                      <button aria-label="Decrease quantity" onClick={() => updateQty(item.id, item.qty - 1)}><FiMinus /></button>
                      <span>{item.qty}</span>
                      <button aria-label="Increase quantity" onClick={() => updateQty(item.id, item.qty + 1)}><FiPlus /></button>
                    </div>
                    <span className={styles.lineTotal}>${(item.price * item.qty).toFixed(2)}</span>
                    <button className={styles.removeBtn} aria-label={`Remove ${item.name}`} onClick={() => removeItem(item.id)}>
                      <FiTrash2 />
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className={styles.summary}>
                <h3>Order Summary</h3>
                <form className={styles.couponForm} onSubmit={handleApply}>
                  <FiTag />
                  <input
                    type="text"
                    placeholder="Coupon code (try EMBERS10)"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <button type="submit" className="btn btn-ghost">Apply</button>
                </form>
                {couponMsg && <p className={styles.couponMsg}>{couponMsg}</p>}

                <div className={styles.row2}>
                  <span>Subtotal</span>
                  <span>${totals.subtotal.toFixed(2)}</span>
                </div>
                {coupon && (
                  <div className={styles.row2}>
                    <span>Discount ({coupon.code})</span>
                    <span>-${totals.discount.toFixed(2)}</span>
                  </div>
                )}
                <div className={styles.row2}>
                  <span>Estimated Tax</span>
                  <span>${totals.tax.toFixed(2)}</span>
                </div>
                <div className={styles.row2}>
                  <span>Delivery</span>
                  <span>{totals.delivery > 0 ? `$${totals.delivery.toFixed(2)}` : 'Free'}</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.total}>
                  <span>Total</span>
                  <span>${totals.total.toFixed(2)}</span>
                </div>
                <span className={styles.eta}>Estimated delivery: 35–45 minutes</span>
                <button className="btn btn-primary" onClick={() => navigate('/checkout')}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
