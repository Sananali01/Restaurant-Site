import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ReviewCard from '../ReviewCard/ReviewCard.jsx';
import styles from './TestimonialSlider.module.css';

export default function TestimonialSlider({ reviews }) {
  return (
    <div className={styles.wrap}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={22}
        slidesPerView={1.05}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        breakpoints={{
          720: { slidesPerView: 2.2 },
          1080: { slidesPerView: 3 },
        }}
      >
        {reviews.map((r, i) => (
          <SwiperSlide key={r.id}>
            <ReviewCard review={r} index={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
