import { Helmet } from 'react-helmet-async';
import FAQAccordion from '../../components/FAQAccordion/FAQAccordion.jsx';
import CTA from '../../components/CTA/CTA.jsx';
import { faqs } from '../../data/team.js';
import styles from './FAQ.module.css';

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ — Embers</title>
        <meta name="description" content="Answers to common questions about reservations, dietary needs, dress code, and ordering at Embers." />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Need to Know</span>
          <h1>Frequently Asked Questions</h1>
          <p>Everything guests usually ask before their first visit.</p>
        </div>
      </section>

      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.wrap}`}>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTA
        eyebrow="Still Have Questions?"
        title="We're happy to help"
        subtitle="Reach out directly and our team will get back to you within a day."
        primary={{ to: '/contact', label: 'Contact Us' }}
        secondary={{ to: '/reservation', label: 'Book a Table' }}
      />
    </>
  );
}
