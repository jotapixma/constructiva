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
    "title": 'Inspección recepción de inmueble',
  },
];

const Services = ({title}) => {
  return (  
    <section className={styles.servicePanel}>
      <Container>
        <div className="title-container">
          <h2 className="title">{title}</h2>
        </div>
        <Grid container spacing={2}>
          {items &&
            items.map((item) => (
              <Grid key={item.id} item xs={12} md={4}>
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