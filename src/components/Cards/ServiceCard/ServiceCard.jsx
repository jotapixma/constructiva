import React from 'react';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from './ServiceCard.module.scss';

const ServiceCard = ({item}) => {

  const iconComponent = (item) => {
    switch(item.icon) {
      case 'arquitectura':
        return <ArchitectureIcon/>;
      case 'construccion':
        return <CorporateFareIcon/>;
      case 'inspeccion':
        return <VisibilityIcon/>;
      default:
        return null;
    }
  };


  return ( 
    <div className={styles.serviceCard}>
    <div className={styles['serviceCard__inner']}>
      <div className={`${styles['serviceCard__face']} ${styles['serviceCard__front']}`}>
        {iconComponent(item)}
        <h3 className={styles.title}>{item.title}</h3>
      </div>
      <div className={`${styles['serviceCard__face']} ${styles['serviceCard__back']}`}>
        <p className={styles.description}>{item.descripcion}</p>
      </div>
    </div>
  </div>
    // <div className={styles.serviceCard}>
    //   <div className={styles.serviceCard__front}>
    //     {iconComponent(item)}
    //     <h3 className={styles.title}>{item.title}</h3>
    //   </div>
    //   <div className={styles.serviceCard__back}>
    //     <p className={styles.description}>{item.description}</p>
    //   </div>
    // </div>
   );
}
 
export default ServiceCard;