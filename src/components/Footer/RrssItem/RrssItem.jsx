import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import styles from './RrssItem.module.scss';

const RrssItem = ({item}) => {  

  const iconComponent = (item) => {
    switch(item.title) {
      case 'facebook':
        return <FacebookIcon />;
      case 'whatsapp':
        return <WhatsAppIcon />;
      case 'instagram':
        return <InstagramIcon />;
      case 'linkedin':
      return <LinkedInIcon />;
      default:
        return null;
    }
  };

  return ( 
    <React.Fragment>
      <Link href={item.link} className={styles.itemLink}>
        {iconComponent(item)}
      </Link>
    </React.Fragment>
  );
}
 
export default RrssItem;