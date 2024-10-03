import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Box from "@mui/material/Box";
import styles from './ProyectCard.module.scss';

const ProyectCard = ({proyecto}) => {

  return ( 
    <Link href={`/proyectos/${proyecto.id}`}>
      <article className={styles.cardBox}>
        <figure className={styles.imgMask}>
          <Image 
            src={proyecto.image} 
            width={3840} 
            height={2560} 
            layout="responsive"
            alt="image"
          />  
        </figure> 
        <Box className={styles.textBox}>
          <h2 className={styles.title}>{proyecto.title}</h2>
          {/* <p className={styles.description}>{proyecto.description}</p> */}
        </Box>
      </article>
    </Link>
  );
}
 
export default ProyectCard;