import { Container } from '@mui/material';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import ContactForm from '../ContactForm/ContactForm';
import ContentPanel from './ContentPanel/ContentPanel';
import Image from "next/legacy/image";
import styles from './SingleProyect.module.scss';

const SingleProyect = ({proyecto}) => {
  return (  
    <section className={styles.section}>
      <Box className={styles.headBox}>
        <h1 className={styles.title}>{proyecto.title}</h1>       
        {/* <p>{proyecto.description}</p>  */}
      </Box>
      <Box className={styles.formPanel}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <figure className={styles.imgMask}>
                <Image 
                  src={proyecto.image} 
                  width="1200" 
                  height="800" 
                  layout="responsive" 
                  alt="image"
                >  
                </Image>
              </figure> 
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles.goalsPanel}>
                <h2 className={styles.title}>{proyecto.description}</h2>
                {proyecto.goals && proyecto.goals.length > 0 && (
                  proyecto.goals.map((goal, index) => (
                    <li key={index}>{goal}</li>
                  ))
                )}
              </div>
              {/* <ContactForm/> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      <ContentPanel proyecto={proyecto}/>

    </section>
  );
}
 
export default SingleProyect;