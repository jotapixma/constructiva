import React from 'react';
import Container from '@mui/material/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import BrandCard from '../Cards/BrandCard/BrandCard';
import Box from '@mui/material/Box';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import styles from './Partners.module.scss'

// Import Swiper styles
import 'swiper/css';
// import 'swiper/swiper-bundle.css';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';

SwiperCore.use([Autoplay]);

let brands = [
  {
      "title": "1",
      "url": "/ultimate-fitness/",
      "image": "/brands/constructiva.jpg"
  },
  {
      "title": "2",
      "url": "/versus-socks/",
      "image": "/brands/antumanal.webp"
  },
  {
      "title": "3",
      "url": "/wild-foods/",
      "image": "/brands/vasco.png"
  },
  {
      "title": "4",
      "url": "/compres-sport/",
      "image": "/brands/verces.jpg"
  },
  {
    "title": "5",
    "url": "/ultimate-fitness/",
    "image": "/brands/constructiva.jpg"
  },
  {
    "title": "6",
    "url": "/compres-sport/",
    "image": "/brands/vasco.png"
  }
]


const CategoriesPanel  = ({title}) => {
  const [swiper, setSwiper] = React.useState(null);

  const handlePrevSlide = () => {
    swiper.slidePrev();
  };

  const handleNextSlide = () => {
    console.log('entre aqui');
    swiper.slideNext();
  };
  
  return (  
    <section className={styles.partners}>
      <Container>
        <div className="title-container">
          <h2 className="title">{title}</h2>
        </div>
        <Box className="slick-container">
          <button className="slick-arrow left-arrow" type="button" onClick={handlePrevSlide}><NavigateBeforeIcon/></button>
          <Swiper
            modules={[Navigation]}
            spaceBetween={8}
            slidesPerView={2.5}
            autoplay={{ delay: 5000 }}
            loop={true}
            breakpoints={{
              1024: {
                slidesPerView: 5,
              },
            }}
            onSwiper={(swiper) =>{ 
              setSwiper(swiper)
            }}
          >
            {brands && brands.length > 0 &&
              brands.map((item, index) => (
                <SwiperSlide key={index}>
                  <BrandCard brand={item}/>
                </SwiperSlide>
              ))
            }
          </Swiper>
          <button className="slick-arrow right-arrow" type="button" onClick={handleNextSlide}><NavigateNextIcon/></button>
        </Box>
      </Container>
    </section>

    
  );
}
 
export default CategoriesPanel ;