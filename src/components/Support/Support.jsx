import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SupportCard from '../../components/Cards/SupportCard/SupportCard';
import styles from './Support.module.scss';

let items = [
  {
    "id": '1',
    "image": '/support-3.jpeg',
    "title": 'Retail',
  },
  {
    "id": '2',
    "image": '/support-2.jpeg',
    "title": 'Espacios',
  },
  {
    "id": '3',
    "image": '/support-1.jpeg',
    "title": 'Industrial',
  },
];

const Support = ({title}) => {
  return (  
    <section className={styles.supportPanel}>
      <Container>
        <div className="title-container">
          <h2 className="title">{title}</h2>
        </div>
        <Box className={styles.supportBox}>
          <Grid container spacing={2}>
            {items &&
              items.map((item) => (
                <Grid key={item.id} item xs={12} md={4}>
                  <SupportCard item={item}/>
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
 
export default Support;