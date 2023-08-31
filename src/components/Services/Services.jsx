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
    "descripcion" : '* Propuesta de destribución espacial. Planos de planta. *Optimización de espacios. *Definición de terminaciones y materiales, planos aptos para construcción, modelados 3D, renderización/imágenes foto realistas'
  },
  {
    "id": '2',
    "icon": 'construccion',
    "title": 'Construcción y Habilitación',
    "descripcion" : '* Servicios de planificación, diseño, construcción y completa administración de Obras civiles. * Habilitaciones y remodelaciones de espacios interiores y exteriores, lo cual, implica desarrollo y ejecución de trabajos estructurales, terminaciones (Pinturas, instalación de pavimentos, revestimientos, etc.), mobiliarios, especialidades ( Eléctricas, sanitarias, detección extinción de incendios, gas, clima, etc.) y todo necesario para adaptar el entorno a lo requerido por el cliente.'
  },
  {
    "id": '3',
    "icon": 'inspeccion',
    "title": 'Inspección para Recepción de Inmueble',
    "descripcion" : 'Inspecciones e informe con observaciones, del estado actual de inmuebles, en el momento de la recepción de los mismos.'
  },
  {
    "id": '3',
    "icon": 'construccion',
    "title": 'Estudios de propuestas',
    "descripcion" : 'Estudios de costos para armado de presupuestos a terceros'
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