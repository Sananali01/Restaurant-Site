import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiInstagram, FiClock, FiStar } from 'react-icons/fi';
import DishCard from '../../components/DishCard/DishCard.jsx';
import CategoryCard from '../../components/CategoryCard/CategoryCard.jsx';
import ChefCard from '../../components/ChefCard/ChefCard.jsx';
import OfferCard from '../../components/OfferCard/OfferCard.jsx';
import TestimonialSlider from '../../components/TestimonialSlider/TestimonialSlider.jsx';
import Statistics from '../../components/Statistics/Statistics.jsx';
import Newsletter from '../../components/Newsletter/Newsletter.jsx';
import CTA from '../../components/CTA/CTA.jsx';
import { bestSellers, chefPicks, todaysSpecial, dishes } from '../../data/dishes.js';
import { categories } from '../../data/categories.js';
import { chefs, testimonials, galleryImages } from '../../data/team.js';
import styles from './Home.module.css';

const featured = dishes.slice(0, 8);
const instaImages = galleryImages.slice(0, 6);

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Embers — Modern Fire &amp; Table</title>
        <meta name="description" content="A modern fine-dining restaurant built around wood-fired technique and seasonal ingredients. Reserve a table or order online." />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <motion.div
            className={styles.heroCopy}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Modern Fire &amp; Table</span>
            <h1 className={styles.heroTitle}>
              Cooking is our <em>craft</em>,<br /> the table is our <em>stage</em>.
            </h1>
            <p className={styles.heroSub}>
              Seasonal ingredients, wood-fired technique, and a room built for slow evenings —
              since 2008.
            </p>
            <div className={styles.heroActions}>
              <Link to="/reservation" className="btn btn-primary">Book a Table</Link>
              <Link to="/menu" className="btn btn-outline">Explore Menu</Link>
            </div>
            <div className={styles.heroMeta}>
              <span><FiStar /> 4.9 average rating</span>
              <span><FiClock /> Open until 11:00 PM</span>
            </div>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="https://picsum.photos/seed/embers-hero-main/620/720" alt="Signature plate at Embers" className={styles.heroImgMain} />
            <motion.img
              src="https://picsum.photos/seed/embers-hero-side/300/300"
              alt="Chef finishing a dish"
              className={styles.heroImgFloat}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className={styles.heroCard}>
              <strong>Today&rsquo;s Special</strong>
              <span>{todaysSpecial.name}</span>
              <span className={styles.heroCardPrice}>${todaysSpecial.price.toFixed(2)}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story preview */}
      <section className={`section ${styles.story}`}>
        <div className={`container ${styles.storyGrid}`}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}>
            <img src="https://picsum.photos/seed/embers-story/640/520" alt="Embers dining room" className={styles.storyImg} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">Our Story</span>
            <h2 className={styles.storyTitle}>Eighteen years of letting the fire lead.</h2>
            <p className={styles.storyText}>
              Embers opened with one idea: let the ingredient speak, and let the flame do the
              work. Every dish that leaves our kitchen still passes through the same wood-fired
              hearth we built on day one.
            </p>
            <Link to="/about" className={styles.storyLink}>
              Read our full story <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">From the Kitchen</span>
              <h2>Featured Dishes</h2>
            </div>
            <Link to="/dishes" className={styles.viewAll}>View all dishes <FiArrowRight /></Link>
          </div>
          <div className={styles.dishGrid}>
            {featured.map((d, i) => <DishCard key={d.id} dish={d} index={i} />)}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className={`section ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">Browse</span>
              <h2>Popular Categories</h2>
            </div>
            <Link to="/categories" className={styles.viewAll}>All categories <FiArrowRight /></Link>
          </div>
          <div className={styles.categoryGrid}>
            {categories.slice(0, 6).map((c, i) => <CategoryCard key={c.id} category={c} index={i} />)}
          </div>
        </div>
      </section>

      {/* Chef Recommendations */}
      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">Chef&rsquo;s Table</span>
              <h2>Chef Recommendations</h2>
            </div>
          </div>
          <div className={styles.dishGrid}>
            {chefPicks.slice(0, 4).map((d, i) => <DishCard key={d.id} dish={d} index={i} />)}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className={`section ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">Guest Favorites</span>
              <h2>Best Sellers</h2>
            </div>
          </div>
          <div className={styles.dishGrid}>
            {bestSellers.map((d, i) => <DishCard key={d.id} dish={d} index={i} />)}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">Save More</span>
              <h2>Special Offers</h2>
            </div>
            <Link to="/offers" className={styles.viewAll}>All offers <FiArrowRight /></Link>
          </div>
          <div className={styles.offerGrid}>
            {[0, 1, 2].map((i) => <OfferCard key={i} offer={{
              id: `home-o${i}`,
              ...[
                { title: 'Weekend Deal', description: '20% off all dinner mains, Friday through Sunday.', tag: 'Weekend', discount: '20% OFF', validUntil: 'Every weekend', image: 'https://picsum.photos/seed/embers-offer-weekend/560/400' },
                { title: 'Family Combo', description: 'Four mains, two starters, and a shared dessert board.', tag: 'Family', discount: 'From $89', validUntil: 'Ongoing', image: 'https://picsum.photos/seed/embers-offer-family/560/400' },
                { title: 'Happy Hour', description: 'Half-price cocktails and small plates at the bar.', tag: 'Happy Hour', discount: '50% OFF', validUntil: 'Daily, 5–7pm', image: 'https://picsum.photos/seed/embers-offer-happyhour/560/400' },
              ][i],
            }} index={i} />)}
          </div>
        </div>
      </section>

      <Statistics />

      {/* Reviews */}
      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">Word of Mouth</span>
              <h2>What Guests Are Saying</h2>
            </div>
            <Link to="/testimonials" className={styles.viewAll}>All reviews <FiArrowRight /></Link>
          </div>
          <TestimonialSlider reviews={testimonials} />
        </div>
      </section>

      {/* Instagram gallery */}
      <section className={`section ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">@embersrestaurant</span>
              <h2>From Our Instagram</h2>
            </div>
          </div>
          <div className={styles.instaGrid}>
            {instaImages.map((g) => (
              <a key={g.id} href="#" className={styles.instaTile} aria-label="View on Instagram">
                <img src={g.image} alt="" loading="lazy" />
                <span className={styles.instaOverlay}><FiInstagram /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Meet a chef teaser */}
      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">The Team</span>
              <h2>Meet Our Chefs</h2>
            </div>
            <Link to="/chefs" className={styles.viewAll}>All chefs <FiArrowRight /></Link>
          </div>
          <div className={styles.chefGrid}>
            {chefs.slice(0, 3).map((c, i) => <ChefCard key={c.id} chef={c} index={i} />)}
          </div>
        </div>
      </section>

      <CTA />
      <Newsletter />
    </>
  );
}
