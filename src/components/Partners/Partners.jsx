import React from 'react';
import Container from '@mui/material/Container';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BrandCard from '../Cards/BrandCard/BrandCard'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

let brands = [
  {
      "id": 38,
      "title": "Ultimate Fitness",
      "url": "/ultimate-fitness/",
      "image": "/brands/ultimate-2.jpeg"
  },
  {
      "id": 39,
      "title": "Versus Socks",
      "url": "/versus-socks/",
      "image": "/brands/versus-socks.jpeg"
  },
  {
      "id": 40,
      "title": "Wild Foods",
      "url": "/wild-foods/",
      "image": "/brands/logo-wild.svg"
  },
  {
      "id": 41,
      "title": "COMPRES SPORT",
      "url": "/compres-sport/",
      "image": "/brands/compress-sport.jpeg"
  },
  {
      "id": 42,
      "title": "Camelbak",
      "url": "/camelbak/",
      "image": "/brands/camelbak.jpeg"
  },
  {
      "id": 43,
      "title": "Skullcandy",
      "url": "/skullcandy/",
      "image": "/brands/skullcandy.jpeg"
  },
  {
      "id": 44,
      "title": "Polar",
      "url": "/polar/",
      "image": "/brands/polar.jpeg"
  },
  {
      "id": 45,
      "title": "Optic Nerve",
      "url": "/optic-nerve/",
      "image": "/brands/optic.jpg"
  },
  {
      "id": 46,
      "title": "Garmin",
      "url": "/garmin/",
      "image": "/brands/garmin.jpg"
  },
  {
    "id": 47,
    "title": "Powerbar",
    "url": "/powerbar/",
    "image": "/brands/powerbar-new.svg"
  }
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
    <section className="generic-padding background-svg right">
      <Container>
        <div className="slick-title-container">
          <h2 className="default-title primary-line">{title}</h2>
          <div className="button-container">
            <button type="button" onClick={handlePrevSlide}><ArrowBackIosIcon/></button>
            <button type="button" onClick={handleNextSlide}><ArrowForwardIosIcon/></button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={5}
          slidesPerView={3.5}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 7,
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