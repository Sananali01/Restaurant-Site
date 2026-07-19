import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiPlayCircle, FiStar } from 'react-icons/fi';
import TestimonialSlider from '../../components/TestimonialSlider/TestimonialSlider.jsx';
import { testimonials } from '../../data/team.js';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const avg = (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <>
      <Helmet>
        <title>Testimonials — Embers</title>
        <meta name="description" content="What guests are saying about Embers — real reviews from the dining room." />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Guest Voices</span>
          <h1>Testimonials</h1>
          <div className={styles.ratingRow}>
            <span className={styles.avg}>{avg}</span>
            <div>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => <FiStar key={i} className={styles.star} />)}
              </div>
              <span className={styles.count}>Based on {testimonials.length * 47} Google reviews</span>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.section}`}>
        <div className="container">
          <TestimonialSlider reviews={testimonials} />
        </div>
      </section>

      <section className={`section ${styles.videoSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Watch</span>
            <h2>Video Testimonials</h2>
          </div>
          <div className={styles.videoGrid}>
            {[1, 2, 3].map((n) => (
              <motion.div
                key={n}
                className={styles.videoCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: n * 0.06 }}
              >
                <img src={`https://picsum.photos/seed/embers-video-${n}/500/620`} alt="Guest video testimonial" />
                <span className={styles.playBtn}><FiPlayCircle /></span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
