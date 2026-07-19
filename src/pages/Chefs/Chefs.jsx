import { Helmet } from 'react-helmet-async';
import ChefCard from '../../components/ChefCard/ChefCard.jsx';
import { chefs } from '../../data/team.js';
import styles from './Chefs.module.css';

export default function Chefs() {
  return (
    <>
      <Helmet>
        <title>Chefs — Embers</title>
        <meta name="description" content="Meet the chefs behind Embers — master chef, sous chef, pastry, BBQ, Italian and Asian specialists." />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">The Kitchen Team</span>
          <h1>Meet Our Chefs</h1>
          <p>Six specialists, one kitchen — each trained in a different discipline, working from the same hearth.</p>
        </div>
      </section>

      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.grid}>
            {chefs.map((c, i) => <ChefCard key={c.id} chef={c} index={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}
