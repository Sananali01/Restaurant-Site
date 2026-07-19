import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiUsers, FiCalendar, FiClock } from 'react-icons/fi';
import styles from './Reservation.module.css';

const OCCASIONS = ['None', 'Birthday', 'Anniversary', 'Business Dinner', 'Date Night', 'Celebration'];
const TIMES = ['12:00', '12:30', '13:00', '13:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];

const initialForm = {
  name: '', email: '', phone: '', guests: 2, date: '', time: '19:00', occasion: 'None', request: '',
};

export default function Reservation() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.phone.trim()) e.phone = 'Please enter a phone number.';
    if (!form.date) e.date = 'Choose a date.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <Helmet>
        <title>Reservation — Embers</title>
        <meta name="description" content="Reserve a table at Embers — pick a date, time, and party size in under a minute." />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Book Ahead</span>
          <h1>Reserve Your Table</h1>
          <p>Tables move quickly on weekends — reserve ahead to guarantee your seat by the hearth.</p>
        </div>
      </section>

      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.grid}`}>
          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className={styles.success}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <FiCheckCircle className={styles.successIcon} />
                  <h3>Reservation Requested</h3>
                  <p>
                    Thanks, {form.name.split(' ')[0]} — we&rsquo;ve received your request for {form.guests}{' '}
                    guest{form.guests > 1 ? 's' : ''} on {form.date} at {form.time}. A confirmation email is on its way to {form.email}.
                  </p>
                  <button className="btn btn-outline" onClick={() => { setForm(initialForm); setSubmitted(false); }}>
                    Book Another Table
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} noValidate initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label htmlFor="name">Name</label>
                      <input id="name" type="text" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your full name" />
                      {errors.name && <span className={styles.error}>{errors.name}</span>}
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@email.com" />
                      {errors.email && <span className={styles.error}>{errors.email}</span>}
                    </div>
                  </div>

                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label htmlFor="phone">Phone</label>
                      <input id="phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+1 (555) 000-0000" />
                      {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="guests"><FiUsers /> Guests</label>
                      <select id="guests" value={form.guests} onChange={(e) => update('guests', Number(e.target.value))}>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>{n} guest{n > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label htmlFor="date"><FiCalendar /> Date</label>
                      <input id="date" type="date" min={today} value={form.date} onChange={(e) => update('date', e.target.value)} />
                      {errors.date && <span className={styles.error}>{errors.date}</span>}
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="time"><FiClock /> Time</label>
                      <select id="time" value={form.time} onChange={(e) => update('time', e.target.value)}>
                        {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={form.occasion} onChange={(e) => update('occasion', e.target.value)}>
                      {OCCASIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="request">Special Request</label>
                    <textarea id="request" rows={3} value={form.request} onChange={(e) => update('request', e.target.value)} placeholder="Allergies, seating preference, celebration details..." />
                  </div>

                  <div className={styles.actions}>
                    <button type="submit" className="btn btn-primary">Reserve Table</button>
                    <button type="submit" className="btn btn-outline">Book Now</button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className={styles.info}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src="https://picsum.photos/seed/embers-reservation/560/420" alt="Reserved table at Embers" />
            <div className={styles.infoCard}>
              <h4>Good to know</h4>
              <ul>
                <li>Large parties (12+) should call us directly for private dining.</li>
                <li>We hold reservations for 15 minutes past the booked time.</li>
                <li>Cancellations need at least 4 hours notice.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
