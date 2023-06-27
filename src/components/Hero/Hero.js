import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import EastIcon from '@mui/icons-material/East';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '../Buttons/Button';
import { Box } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { htmlConverter } from '../../utils/utils';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';
import styles from './Hero.module.scss';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay]);

let items = [
  {
    "id": '1',
    "image": 'https://picsum.photos/1920/600',
    "image_mobile": 'https://picsum.photos/900/1300',
    "title": '120 millones de pesos al año para comenzar',
  },
  {
    "id": '2',
    "image": 'https://picsum.photos/1920/600',
    "image_mobile": 'https://picsum.photos/900/1300',
    "title": 'Constructiva',
  },
  {
    "id": '3',
    "image": 'https://picsum.photos/1920/600',
    "image_mobile": 'https://picsum.photos/900/1300',
    "title": 'La mejor empresa de Chile',
  },
];


export default function Hero({sliderItems}) {
  const [swiper, setSwiper] = React.useState(null);
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(true);
  const matchesMd = useMediaQuery('(min-width:900px)');

  const handlePrevSlide = () => {
    swiper.slidePrev();
  };

  const handleNextSlide = () => {
    swiper.slideNext();
  };

  // useEffect(() => {
  //   swiper?.on('slideChange', () => {
  //     setShowPrevArrow(swiper?.activeIndex !== 0);
  //     setShowNextArrow(swiper?.activeIndex !== (swiper?.slides.length - 1));
  //   });
  // }, [swiper]);

  return (
    <React.Fragment>
      <div className={styles.heroContainer}>
        {/* ${!showPrevArrow && styles.disabled} */}
        <button type="button" className={`${styles.genericArrow} ${styles.leftArrow} `} onClick={handlePrevSlide}><ArrowBackIosIcon/></button>
        <Swiper
          modules={[Navigation, Pagination]}
          // autoplay={{ delay: 6000 }}
          loop={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) =>{ 
            // console.log(swiper)
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
                  {/* <div className={styles.bannerMobile}>
                    <figure>
                      <img src={item.image_mobile} alt="hero" className="img-responsive" />
                    </figure>
                  </div> */}
                </article>
              </SwiperSlide>
            ))
          }
        </Swiper>
        {/* ${!showNextArrow && styles.disabled} */}
        <button type="button" className={`${styles.genericArrow} ${styles.rightArrow}`} onClick={handleNextSlide}><ArrowForwardIosIcon/></button>

      </div>

    </React.Fragment>
  )
}