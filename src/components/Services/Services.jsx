import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ServiceCard from '../../components/Cards/ServiceCard/ServiceCard';
import styles from './Services.module.scss';

let items = [
  {
    "id": '1',
    "icon": '<ApartmentIcon/>',
    "title": 'Arquitectura y Diseño',
  },
  {
    "id": '2',
    "icon": 'https://picsum.photos/1920/600',
    "title": 'Construcción y Habilitación',
  },
  {
    "id": '3',
    "icon": 'https://picsum.photos/1920/600',
    "title": 'Otro Servicio',
  },
];

const Services = () => {
  return (  
    <section className={styles.servicePanel}>
      <Container>
        <h2 className={styles.title}>Servicios</h2>
        <Grid container spacing={1}>
          {items &&
            items.map((item) => (
              <Grid item xs={12} md={4}>
                <ServiceCard item={item}/>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </section>
  );
}
 
export default Services;