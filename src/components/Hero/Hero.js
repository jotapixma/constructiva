import React, { useState, useEffect } from 'react';
import { useSwiper } from 'swiper/react';
import Container from '@mui/material/Container';
import EastIcon from '@mui/icons-material/East';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper, SwiperSlide } from 'swiper/swiper-react.mjs';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import SwiperCore, { Autoplay } from 'swiper';
import styles from './Hero.module.scss';
import Image from "next/legacy/image";
import useMediaQuery from '@mui/material/useMediaQuery';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// SwiperCore.use([Autoplay]);

let items = [
  {
    "id": '1',
    "image": '/hero-1.jpeg',
    "image_mobile": 'https://picsum.photos/900/1300',
    "title": 'Nuestros clientes validan nuestra visión',
  },
  {
    "id": '2',
    "image": '/hero-2.jpeg',
    "image_mobile": 'https://picsum.photos/900/1300',
    "title": 'Constructiva apoyando el Ecosistema',
  },
  {
    "id": '3',
    "image": 'https://picsum.photos/1920/600',
    "image_mobile": 'https://picsum.photos/900/1300',
    "title": 'Top 20 mejores empresas de Chile',
  },
];


export default function Hero({sliderItems}) {
  // const [swiper, setSwiper] = React.useState(null);
  const swiper = useSwiper();
  // const [showPrevArrow, setShowPrevArrow] = useState(false);
  // const [showNextArrow, setShowNextArrow] = useState(true);
  const matchesMd = useMediaQuery('(min-width:900px)');

  // const handlePrevSlide = () => {
  //   swiper.slidePrev();
  // };

  // const handleNextSlide = () => {
  //   swiper.slideNext();
  // };

  return (
    <React.Fragment>
      <div className={styles.heroContainer}>
        {/* ${!showPrevArrow && styles.disabled} */}
        <button type="button" className={`${styles.genericArrow} ${styles.leftArrow} `} onClick={() => swiper.slidePrev()}><ArrowBackIosIcon/></button>
        <Swiper
          modules={[Navigation, Pagination]}
          // autoplay={{ delay: 6000 }}
          loop={true}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          // onSwiper={(swiper) =>{ 
          //   // console.log(swiper)
          //   setSwiper(swiper)
          // }}
        >
          {items &&
            items.map((item) => (
              <SwiperSlide key={item.id}>
                <article className={styles.hero}>
                  <div className={styles.heroBody}>
                    <div className={styles.heroBody__container}>
                      <h1 className={styles.heroTitle}>{item.title}</h1>
                    </div>
                  </div>
                  {matchesMd ? (
                    <figure className={styles.bannerMask}>
                      <Image 
                        src={item.image} 
                        width={1900} 
                        height={600} 
                        alt={item.title} 
                        priority={true}
                        layout="responsive"
                      />
                    </figure>
                  ) : (
                    <figure className={styles.bannerMask}>
                      <Image 
                        src={item.image_mobile} 
                        width={900} 
                        height={1300} 
                        alt={item.title} 
                        priority={true}
                        layout="responsive"
                      />
                    </figure>
                  )}
                </article>
              </SwiperSlide>
            ))
          }
        </Swiper>
        {/* <button type="button" className={`${styles.genericArrow} ${styles.rightArrow}`} onClick={() => swiper.slideNext()}><ArrowForwardIosIcon/></button> */}

      </div>

    </React.Fragment>
  )
}