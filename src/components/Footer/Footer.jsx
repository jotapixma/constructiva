import React from 'react';
import Container from '@mui/material/Container';
import styles from './Footer.module.scss';

const Footer = () => {
  return (  
    <footer className={styles.footer}>
      <Container>
        <p>Constructora LV 2023. Todos los derechos reservados</p>
      </Container>
    </footer>
  );
}
 
export default Footer;