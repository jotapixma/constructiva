import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ServiceCard from '../../components/Cards/ServiceCard/ServiceCard';
import Image from "next/legacy/image";
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTheme } from '@mui/material/styles';
import styles from './Purpose.module.scss';

let items = [
  {
    "id": '1',
    "title": 'Creamos espacios inspiradores',
  },
  {
    "id": '2',
    "title": 'Buscamos constantemente innovar',
  },
  {
    "id": '3',
    "title": 'Excelencia operacional y calidad en la entrega',
  },
  {
    "id": '4',
    "title": 'Desarrollamos relaciones de largo plazo con nuestros clientes',
  },
];

const Purpose = ({title}) => {
  return (  
    <section className={styles.purposePanel}>
      <Container>
        <div className="title-container">
          <h2 className="title">{title}</h2>
        </div>
        <div className={styles.descriptionBox}>
          <p>En cada proyecto que realizamos creamos espacios corporativos excepcionales.</p>
          <p>Nuestras soluciones se basan en cuatro pilares fundamentales:</p>
        </div>
        <Box className={styles.bodyPanel}>
          <Grid container 
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}>
            <Grid item xs={12} md={8}>
              {items &&
                <ul className={styles.unorderList}>
                  {items.map((item) => (
                    <li key={item.id}><CheckCircleIcon/>{item.title}</li>
                  ))}
                </ul>
              }
            </Grid>
            <Grid item xs={12} md={4}>
              <figure className={styles.imgMask}>
                <Image src="/purpose.jpeg" width={2499} height={1669} layout="responsive" alt="propósito"></Image>
              </figure>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
 
export default Purpose;