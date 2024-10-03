import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from './SupportCard.module.scss';

const SupportCard = ({item}) => {
  const matchesMd = useMediaQuery('(min-width:900px)');

  return (  
    // <Link href="/">
    // </Link>
    <article className={styles.cardBox}>
      {matchesMd ? (
        <>
          <figure className={styles.cardBox__mask}>
            <Image src={item.image} width={4032} height={3024} layout="responsive" />
          </figure>
          <h2 className={styles.cardBox__title}>{item.title}</h2>
        </>
      ) : (
        <>
          <figure className={styles.cardBox__maskMobile}>
            <Image src={item.image} width={680} height={750} layout="responsive" />
          </figure>
          <h2 className={styles.cardBox__title}>{item.title}</h2>
        </>
      )}
    </article>
  );
}
 
export default SupportCard;