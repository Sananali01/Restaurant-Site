import { Link, useLocation, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiHome } from 'react-icons/fi';
import styles from './OrderSuccess.module.css';

export default function OrderSuccess() {
  const { state } = useLocation();

  if (!state?.orderId) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>Order Confirmed — Embers</title>
        <meta name="description" content="Your order has been placed successfully." />
      </Helmet>

      <section className={`section ${styles.section}`}>
        <div className="container">
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className={styles.iconWrap}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15, type: 'spring', stiffness: 200 }}
            >
              <FiCheckCircle />
            </motion.div>
            <h1>Order Confirmed</h1>
            <p>Thank you — your order is being prepared. A confirmation has been sent to your email.</p>

            <div className={styles.details}>
              <div>
                <span className={styles.label}>Order ID</span>
                <span className={styles.value}>{state.orderId}</span>
              </div>
              <div>
                <span className={styles.label}>Total Paid</span>
                <span className={styles.value}>${state.total.toFixed(2)}</span>
              </div>
              <div>
                <span className={styles.label}><FiClock /> Estimated Time</span>
                <span className={styles.value}>35–45 minutes</span>
              </div>
            </div>

            <div className={styles.actions}>
              <Link to="/" className="btn btn-primary"><FiHome /> Back to Home</Link>
              <Link to="/menu" className="btn btn-outline">Order More</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
