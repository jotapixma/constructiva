import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import slugify from 'slugify';
import styles from './BrandCard.module.scss'

const BrandCard = ({brand}) => {
  // console.log('brand:', brand);

  return (
    <Link>
      <a>
        <article className={styles.brandCard}>
          <figure className={styles.brandCard__mask}>
            {/* <img src="/test-brand.jpeg" className="img-responsive" alt="brand" /> */}
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
      </a>
    </Link>
  );
}
 
export default BrandCard;