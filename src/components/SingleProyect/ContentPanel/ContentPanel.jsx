import GalleryCard from '../../Cards/GalleryCard/GalleryCard';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './ContentPanel.module.scss';

const ContentPanel = ({proyecto}) => {
  return (  
    <Container>
      <Grid container spacing={3} style={{ marginTop: 24}}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            {proyecto.gallery.map((item, index) => (
              <Grid item xs={6} md={6} key={index}>
                <GalleryCard item={item}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactForm title="Contactános" border="true"/>
        </Grid>
      </Grid>
    </Container>
  );
}
 
export default ContentPanel;