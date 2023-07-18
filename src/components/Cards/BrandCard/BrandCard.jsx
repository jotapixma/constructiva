import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BrandCard.module.scss'

const BrandCard = ({brand}) => {
  // console.log('brand:', brand);

  return (
    <article className={styles.brandCard}>
      <figure className={styles.brandCard__mask}>
        <Image 
          src={brand.image} 
          width={170} 
          height={170} 
          layout="intrinsic" 
          alt={brand.title} 
          priority={true}
        />
      </figure>
    </article>
  );
}
 
export default BrandCard;