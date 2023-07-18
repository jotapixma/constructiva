import React from 'react';
import Container from '@mui/material/Container';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BrandCard from '../Cards/BrandCard/BrandCard'
import styles from './Partners.module.scss'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

let brands = [
  {
      "id": 38,
      "title": "Ultimate Fitness",
      "url": "/ultimate-fitness/",
      "image": "/brands/constructiva.jpg"
  },
  {
      "id": 39,
      "title": "Versus Socks",
      "url": "/versus-socks/",
      "image": "/brands/antumanal.webp"
  },
  {
      "id": 40,
      "title": "Wild Foods",
      "url": "/wild-foods/",
      "image": "/brands/vasco.png"
  },
  {
      "id": 41,
      "title": "COMPRES SPORT",
      "url": "/compres-sport/",
      "image": "/brands/verces.jpg"
  },
  {
    "id": 42,
    "title": "Ultimate Fitness",
    "url": "/ultimate-fitness/",
    "image": "/brands/constructiva.jpg"
  },
  {
    "id": 43,
    "title": "COMPRES SPORT",
    "url": "/compres-sport/",
    "image": "/brands/verces.jpg"
},
]

const CategoriesPanel  = ({title}) => {
  const [swiper, setSwiper] = React.useState(null);

  const handlePrevSlide = () => {
    swiper.slidePrev();
  };

  const handleNextSlide = () => {
    swiper.slideNext();
  };
  
  return (  
    <section className={styles.partners}>
      <Container>
        <div className="title-container">
          <h2 className="title">{title}</h2>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={5}
          slidesPerView={3.5}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 5,
            },
          }}
          // onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) =>{ 
            setSwiper(swiper)
          }}
        >
          {brands && brands.length > 0 &&
            brands.map((item) => (
              <SwiperSlide key={item.id}>
                <BrandCard brand={item}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Container>
    </section>

    
  );
}
 
export default CategoriesPanel ;