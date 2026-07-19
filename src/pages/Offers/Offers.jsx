import { Helmet } from 'react-helmet-async';
import OfferCard from '../../components/OfferCard/OfferCard.jsx';
import { offers } from '../../data/team.js';
import styles from './Offers.module.css';

export default function Offers() {
  return (
    <>
      <Helmet>
        <title>Offers — Embers</title>
        <meta name="description" content="Current deals at Embers — weekend specials, family combos, happy hour, and more." />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Save More</span>
          <h1>Special Offers</h1>
          <p>Seven ways to make your visit go further, updated with the seasons.</p>
        </div>
      </section>

      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.grid}>
            {offers.map((o, i) => <OfferCard key={o.id} offer={o} index={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}
