import Image from 'next/image';
import styles from './GalleryCard.module.scss';

const GalleryCard = ({item}) => {
  return (  
    <figure className={styles.cardMask}>
      <Image 
        src={item.image} 
        width="1200" 
        height="800" 
        layout="responsive" 
        alt="image"
      >  
      </Image>
    </figure> 
  );
}
 
export default GalleryCard;