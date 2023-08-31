import React from 'react';
import Container from '@mui/material/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import BrandCard from '../Cards/BrandCard/BrandCard';
import Box from '@mui/material/Box';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import styles from './Partners.module.scss'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


let brands = [
  {
      "url": "/",
      "image": "/brands/logo-antumanal.webp"
  },
  {
    "url": "/",
    "image": "/brands/constructiva.jpg"
  },
  {
    "url": "/",
    "image": "/brands/pedidosya.svg"
  },
  {
    "url": "/",
    "image": "/brands/cmip.jpeg"
  },
  {
    "url": "/",
    "image": "/brands/arqboutique.jpg"
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
        <Box className="slick-container">
          <button className="slick-arrow left-arrow" type="button" onClick={handlePrevSlide}><NavigateBeforeIcon/></button>
          <Swiper
            modules={[Navigation]}
            spaceBetween={8}
            slidesPerView={5}
            loop={true}
            // breakpoints={{
            //   1024: {
            //     slidesPerView: 5,
            //   },
            // }}
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