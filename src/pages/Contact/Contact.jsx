import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";
import FAQAccordion from "../../components/FAQAccordion/FAQAccordion.jsx";
import { faqs } from "../../data/team.js";
import styles from "./Contact.module.css";

const INFO = [
  {
    icon: FiMapPin,
    title: "Address",
    text: "MM Alam Road, Gulberg III, Lahore, Pakistan",
  },
  { icon: FiPhone, title: "Phone", text: "+92 300 1234567" },
  { icon: FiMail, title: "Email", text: "hello@embersrestaurant.pk" },
  { icon: FiClock, title: "Hours", text: "Mon–Sun, 12:00 PM – 11:30 PM" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>Contact — Embers</title>
        <meta
          name="description"
          content="Get in touch with Embers — address, phone, email, and a contact form."
        />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">We&rsquo;d Love to Hear From You</span>
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.infoGrid}>
            {INFO.map((item, i) => (
              <motion.div
                key={item.title}
                className={styles.infoCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <item.icon className={styles.infoIcon} />
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.mainGrid}>
            <motion.div
              className={styles.mapWrap}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <iframe
                title="Embers Restaurant Location"
                src="https://www.google.com/maps?q=MM%20Alam%20Road%2C%20Gulberg%20III%2C%20Lahore%2C%20Pakistan&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            <motion.div
              className={styles.formCard}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {sent ? (
                <div className={styles.success}>
                  <FiCheckCircle />
                  <h4>Message sent</h4>
                  <p>We usually reply within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label htmlFor="c-name">Name</label>
                      <input
                        id="c-name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="c-email">Email</label>
                      <input
                        id="c-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="c-subject">Subject</label>
                    <input
                      id="c-subject"
                      value={form.subject}
                      onChange={(e) => update("subject", e.target.value)}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="c-message">Message</label>
                    <textarea
                      id="c-message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <div className={styles.faqHead}>
            <span className="eyebrow">Common Questions</span>
            <h2>FAQ</h2>
          </div>
          <div className={styles.faqWrap}>
            <FAQAccordion items={faqs.slice(0, 5)} />
          </div>
        </div>
      </section>
    </>
  );
}
