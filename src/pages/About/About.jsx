import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiHeart, FiAward } from 'react-icons/fi';
import ChefCard from '../../components/ChefCard/ChefCard.jsx';
import Statistics from '../../components/Statistics/Statistics.jsx';
import CTA from '../../components/CTA/CTA.jsx';
import { chefs } from '../../data/team.js';
import styles from './About.module.css';

const VALUES = [
  { icon: FiTarget, title: 'Precision', text: 'Every dish is measured, timed, and plated with the same discipline, service after service.' },
  { icon: FiEye, title: 'Seasonality', text: 'Menus shift with the harvest — nothing is on the plate out of habit.' },
  { icon: FiHeart, title: 'Hospitality', text: 'The kitchen and the floor work as one team, built around the guest in front of them.' },
  { icon: FiAward, title: 'Craft', text: 'We train in-house for years before a chef touches the pass on a busy night.' },
];

const TIMELINE = [
  { year: '2008', text: 'Embers opens with an eight-table dining room and a single wood-fired hearth.' },
  { year: '2013', text: 'Awarded "Best New Concept" by the city\u2019s restaurant guild.' },
  { year: '2017', text: 'Expanded into the adjoining space, adding the private dining rooms.' },
  { year: '2021', text: 'Earned a Michelin Guide recommendation for the first time.' },
  { year: '2026', text: 'Now serving both dine-in and online ordering, with the same kitchen standards.' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Embers</title>
        <meta name="description" content="The story, mission, and team behind Embers — a modern fire and table restaurant." />
      </Helmet>

      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className="eyebrow">Our Story</span>
          <h1>Eighteen years of letting the fire lead</h1>
          <p>From an eight-table room to a full dining experience — the hearth has never changed.</p>
        </div>
      </section>

      <section className={`section ${styles.storySection}`}>
        <div className={`container ${styles.storyGrid}`}>
          <motion.img
            src="https://picsum.photos/seed/embers-about-interior/700/560"
            alt="Embers dining room interior"
            className={styles.storyImg}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2>How it started</h2>
            <p>
              Embers was founded on a simple bet: guests would come back for technique they could
              taste. What began as a single wood-fired hearth has grown into a full kitchen, but
              the founding rule stands — nothing leaves the pass without passing through fire.
            </p>
            <p className={styles.spacer}>
              Today, the same discipline runs through every station, from the pastry bench to the
              grill line, guided by a team that has trained together for years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`section ${styles.sectionAlt}`}>
        <div className={`container ${styles.mvGrid}`}>
          <motion.div className={styles.mvCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }}>
            <FiTarget className={styles.mvIcon} />
            <h3>Our Mission</h3>
            <p>To make fire-led, ingredient-first cooking feel effortless for every guest who sits at our table.</p>
          </motion.div>
          <motion.div className={styles.mvCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <FiEye className={styles.mvIcon} />
            <h3>Our Vision</h3>
            <p>To be the standard other kitchens measure themselves against for craft, warmth, and consistency.</p>
          </motion.div>
        </div>
      </section>

      {/* History timeline */}
      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">History</span>
            <h2>How we got here</h2>
          </div>
          <div className={styles.timeline}>
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <span className={styles.timelineYear}>{t.year}</span>
                <span className={styles.timelineText}>{t.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Statistics />

      {/* Values */}
      <section className={`section ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">What We Believe</span>
            <h2>Restaurant Values</h2>
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <v.icon className={styles.valueIcon} />
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">The People</span>
            <h2>Meet the Team</h2>
          </div>
          <div className={styles.teamGrid}>
            {chefs.map((c, i) => <ChefCard key={c.id} chef={c} index={i} />)}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Come See Us"
        title="Experience the hearth for yourself"
        subtitle="Reserve a table and taste eighteen years of technique in one sitting."
      />
    </>
  );
}
