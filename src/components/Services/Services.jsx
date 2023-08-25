import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ServiceCard from '../../components/Cards/ServiceCard/ServiceCard';
import styles from './Services.module.scss';

let items = [
  {
    "id": '1',
    "icon": 'arquitectura',
    "title": 'Arquitectura y Diseño',
  },
  {
    "id": '2',
    "icon": 'construccion',
    "title": 'Construcción y Habilitación',
  },
  {
    "id": '3',
    "icon": 'inspeccion',
    "title": 'Inspección de inmueble',
  },
  {
    "id": '3',
    "icon": 'construccion',
    "title": 'Recepción de inmueble',
  },
];

const Services = ({title}) => {
  return (  
    <section className={styles.servicePanel}>
      <Container>
        <div className="title-container">
          <h2 className="title">{title}</h2>
        </div>
        <Box className={styles.servicesBox}>
          <Grid container spacing={2}>
            {items &&
              items.map((item) => (
                <Grid key={item.id} item xs={6} md={3}>
                  <ServiceCard item={item}/>
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
 
export default Services;