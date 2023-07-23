import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { useSwiper } from 'swiper/react';
import EastIcon from '@mui/icons-material/East';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from "next/legacy/image";
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from './Hero.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay]);


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
    "title": 'Constructora LV apoyando el Ecosistema',
  },
  {
    "id": '3',
    "image": 'https://picsum.photos/1920/600',
    "image_mobile": 'https://picsum.photos/900/1300',
    "title": 'Top 20 mejores empresas de Chile',
  },
];


export default function Hero({sliderItems}) {
  const [swiper, setSwiper] = React.useState(null);

  const matchesMd = useMediaQuery('(min-width:900px)');

  const handlePrevSlide = () => {
    swiper.slidePrev();
  };

  const handleNextSlide = () => {
    swiper.slideNext();
  };


  return (
    <React.Fragment>
      <div className={styles.heroContainer}>
        {/* ${!showPrevArrow && styles.disabled} */}
        <button type="button" className={`${styles.genericArrow} ${styles.leftArrow} `} onClick={handlePrevSlide}><ArrowBackIosIcon/></button>
        <Swiper
          modules={[Pagination]}
          autoplay={{ delay: 5000 }}
          loop={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) =>{ 
            setSwiper(swiper)
          }}
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
        <button type="button" className={`${styles.genericArrow} ${styles.rightArrow}`} onClick={handleNextSlide}><ArrowForwardIosIcon/></button>

      </div>

    </React.Fragment>
  )
}