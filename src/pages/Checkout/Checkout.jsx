import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiCreditCard, FiDollarSign, FiSmartphone } from 'react-icons/fi';
import { useCart } from '../../context/CartContext.jsx';
import styles from './Checkout.module.css';

const PAYMENTS = [
  { id: 'card', label: 'Credit / Debit Card', icon: FiCreditCard },
  { id: 'wallet', label: 'Digital Wallet', icon: FiSmartphone },
  { id: 'cash', label: 'Cash on Delivery', icon: FiDollarSign },
];

export default function Checkout() {
  const { items, totals, clearCart } = useCart();
  const navigate = useNavigate();
  const [payment, setPayment] = useState('card');
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', city: '', zip: '' });
  const [errors, setErrors] = useState({});

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    ['name', 'email', 'phone', 'address', 'city', 'zip'].forEach((k) => {
      if (!form[k].trim()) e[k] = 'Required';
    });
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const placeOrder = (e) => {
    e.preventDefault();
    if (items.length === 0) return;
    if (!validate()) return;
    const orderId = `EMB-${Math.floor(100000 + Math.random() * 900000)}`;
    clearCart();
    navigate('/order-success', { state: { orderId, total: totals.total } });
  };

  if (items.length === 0) {
    return (
      <section className={`section ${styles.emptySection}`}>
        <div className="container">
          <p>Your cart is empty — add a few dishes before checking out.</p>
          <Link to="/dishes" className="btn btn-primary">Browse Dishes</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>Checkout — Embers</title>
        <meta name="description" content="Complete your order — delivery details and payment." />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Almost There</span>
          <h1>Checkout</h1>
        </div>
      </section>

      <section className={`section ${styles.section}`}>
        <div className="container">
          <form className={styles.grid} onSubmit={placeOrder}>
            <div className={styles.formCol}>
              <div className={styles.card}>
                <h3>Customer Details</h3>
                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" value={form.name} onChange={(e) => update('name', e.target.value)} />
                    {errors.name && <span className={styles.error}>Required</span>}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} />
                    {errors.email && <span className={styles.error}>Required</span>}
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                  {errors.phone && <span className={styles.error}>Required</span>}
                </div>
              </div>

              <div className={styles.card}>
                <h3>Delivery Address</h3>
                <div className={styles.field}>
                  <label htmlFor="address">Street Address</label>
                  <input id="address" value={form.address} onChange={(e) => update('address', e.target.value)} />
                  {errors.address && <span className={styles.error}>Required</span>}
                </div>
                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label htmlFor="city">City</label>
                    <input id="city" value={form.city} onChange={(e) => update('city', e.target.value)} />
                    {errors.city && <span className={styles.error}>Required</span>}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="zip">ZIP Code</label>
                    <input id="zip" value={form.zip} onChange={(e) => update('zip', e.target.value)} />
                    {errors.zip && <span className={styles.error}>Required</span>}
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <h3>Payment Method</h3>
                <div className={styles.payments}>
                  {PAYMENTS.map((p) => (
                    <button
                      type="button"
                      key={p.id}
                      className={`${styles.paymentOption} ${payment === p.id ? styles.paymentActive : ''}`}
                      onClick={() => setPayment(p.id)}
                    >
                      <p.icon /> {p.label}
                    </button>
                  ))}
                </div>
                {payment === 'card' && (
                  <div className={styles.cardFields}>
                    <div className={styles.field}>
                      <label>Card Number</label>
                      <input placeholder="4242 4242 4242 4242" />
                    </div>
                    <div className={styles.row2}>
                      <div className={styles.field}>
                        <label>Expiry</label>
                        <input placeholder="MM/YY" />
                      </div>
                      <div className={styles.field}>
                        <label>CVC</label>
                        <input placeholder="123" />
                      </div>
                    </div>
                    <span className={styles.note}>Demo checkout — no real payment is processed.</span>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.summary}>
              <h3>Order Summary</h3>
              <div className={styles.itemsList}>
                {items.map((i) => (
                  <div key={i.id} className={styles.itemRow}>
                    <span>{i.qty}&times; {i.name}</span>
                    <span>${(i.price * i.qty).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className={styles.divider} />
              <div className={styles.row2b}><span>Subtotal</span><span>${totals.subtotal.toFixed(2)}</span></div>
              <div className={styles.row2b}><span>Tax</span><span>${totals.tax.toFixed(2)}</span></div>
              <div className={styles.row2b}><span>Delivery</span><span>{totals.delivery > 0 ? `$${totals.delivery.toFixed(2)}` : 'Free'}</span></div>
              <div className={styles.divider} />
              <div className={styles.total}><span>Total</span><span>${totals.total.toFixed(2)}</span></div>
              <button type="submit" className="btn btn-primary">Place Order</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
