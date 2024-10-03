import React from 'react';
import Container from '@mui/material/Container';
import Image from "next/legacy/image";
import FooterWinch from './FooterWinch/FooterWinch';
import RrssItem from './RrssItem/RrssItem';
import Box from '@mui/material/Box';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {

  let items = [
    // {
    //   "id": '1',
    //   "title": 'facebook',
    //   "link": '/',
    // },
    // {
    //   "id": '2',
    //   "title": 'whatsapp',
    //   "link": '/',
    // },
    {
      "id": '3',
      "title": 'instagram',
      "link": 'https://www.instagram.com/constructora.lv/',
    },
    {
      "id": '4',
      "title": 'linkedin',
      "link": 'https://www.linkedin.com/in/constructora-lv-spa-002885270',
    }
  ];

  return (  
    <footer className={styles.footer}>
      <Container>
        <div className={styles.gridColumns}>
          <div className={styles.itemColumn}>
            <ul className={styles.unorderList}>
              <span>Contacto</span>
              <li>+56 9 6104 5977</li>
              <li>contacto@lvconstructora.cl</li>
              <li>Ahumada 254, Oficina 806.</li>
            </ul>
          </div>
          {/* <div className={styles.itemColumn}>
            <ul className={styles.unorderList}>
              <span>Navegación</span>
              <li>Proyectos</li>
              <li>Contacto</li>
            </ul>
          </div> */}
          <div className={styles.itemColumn}>
            <ul className={styles.unorderList}>
              <span>Siguenos</span>
              {items &&
                <Box sx={{ display: 'flex', gap: '1rem', marginTop: '0.8rem' }}>
                  {items.map((item, index) => (
                    <RrssItem item={item} key={index}/>
                  ))}
                </Box>
              }
            </ul>
          </div>
          <div className={styles.itemColumn}>
            <Link href="/">
              <figure className={styles.footerLogo}>
                <Image 
                  src="/logo-constructora-lv-white.png"
                  width={1480} height={877} 
                  alt="logo"
                />
              </figure>
            </Link>
          </div>
        </div>
        <FooterWinch />

      </Container>
    </footer>
  );
}
 
export default Footer;