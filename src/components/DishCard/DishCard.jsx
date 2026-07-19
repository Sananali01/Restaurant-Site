import { motion } from 'framer-motion';
import { FiHeart, FiClock, FiStar } from 'react-icons/fi';
import { useCart } from '../../context/CartContext.jsx';
import { useFavorites } from '../../context/FavoritesContext.jsx';
import styles from './DishCard.module.css';

export default function DishCard({ dish, index = 0 }) {
  const { addItem } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(dish.id);

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: Math.min(index, 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className={styles.imageWrap}>
        <img src={dish.image} alt={dish.name} loading="lazy" className={styles.image} />
        {dish.popular && <span className={styles.tag}>Best Seller</span>}
        <button
          className={`${styles.favBtn} ${fav ? styles.favActive : ''}`}
          aria-pressed={fav}
          aria-label={fav ? `Remove ${dish.name} from favorites` : `Add ${dish.name} to favorites`}
          onClick={() => toggleFavorite(dish.id)}
        >
          <FiHeart />
        </button>
      </div>

      <div className={styles.body}>
        <div className={styles.headRow}>
          <h4>{dish.name}</h4>
          <span className={styles.price}>${dish.price.toFixed(2)}</span>
        </div>
        <p className={styles.desc}>{dish.description}</p>
        <div className={styles.meta}>
          <span><FiStar /> {dish.rating} ({dish.reviews})</span>
          <span><FiClock /> {dish.cookingTime} min</span>
          <span className={styles.spice} data-level={dish.spiceLevel}>{dish.spiceLevel}</span>
        </div>
        <button className={`btn btn-primary ${styles.addBtn}`} onClick={() => addItem(dish)}>
          Add to Cart
        </button>
      </div>
    </motion.article>
  );
}
