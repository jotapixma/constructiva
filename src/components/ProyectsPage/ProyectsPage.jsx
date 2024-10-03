import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import ProyectCard from '@/components/Cards/ProyectCard/ProyectCard';
import styles from './ProyectsPage.module.scss';

const ProyectsPage = ({proyectos}) => {
  return (  
    <section className={styles.proyects}>
      <Container>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Proyectos</h1>
        </div>
        <Grid container spacing={2}>
          {proyectos.map((proyecto,index) => (
            <Grid item xs={12} md={4} key={index}>
              <ProyectCard 
                key={index}
                proyecto={proyecto}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
 
export default ProyectsPage;