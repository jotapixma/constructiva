import React from 'react';
import Container from '@mui/material/Container';
import Image from 'next/image';
import FooterWinch from './FooterWinch/FooterWinch';
import styles from './Footer.module.scss';

const Footer = () => {
  return (  
    <footer className={styles.footer}>
      <Container>
        <div className={styles.gridColumns}>
          <div className={styles.itemColumn}>
            <figure>
              <Image 
                src="/logo-pepsi.png"
                width={162} height={25} 
                layout="responsive"  
                alt="logo"
              />
            </figure>
          </div>
          <div className={styles.itemColumn}>
            <ul className={styles.unorderList}>
              <span>Contacto</span>
              <li>+56 981 7865 22</li>
              <li>pvalero@lvconstructora.cl</li>
              <li>Cerro el Plomo #4390, oficina 44, Las Condes, Santiago, Chile.</li>
            </ul>
          </div>
          <div className={styles.itemColumn}>
            <ul className={styles.unorderList}>
              <span>Navegación</span>
              <li>Proyectos</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div className={styles.itemColumn}>
            <ul className={styles.unorderList}>
              <span>Siguenos</span>
            </ul>
          </div>
        </div>
        <FooterWinch />

      </Container>
    </footer>
  );
}
 
export default Footer;