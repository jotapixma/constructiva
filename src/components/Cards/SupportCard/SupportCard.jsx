import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import styles from './SupportCard.module.scss';

const SupportCard = ({item}) => {
  return (  
    <Link href="/">
      <article className={styles.cardBox}>
        <figure className={styles.cardBox__mask}>
          <Image src={item.image} width={680} height={800} layout="responsive" />
        </figure>
        <h2 className={styles.cardBox__title}>{item.title}</h2>
      </article>
    </Link>
  );
}
 
export default SupportCard;