import React from 'react';
import styles from './ServiceCard.module.scss';
import ApartmentIcon from '@mui/icons-material/Apartment';

const ServiceCard = ({item}) => {
  return ( 
    <div className={styles.serviceCard}>
      <h3 className={styles.title}>{item.title}</h3>
      <ApartmentIcon/>
    </div>
   );
}
 
export default ServiceCard;