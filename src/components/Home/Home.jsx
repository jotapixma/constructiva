import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import Purpose from '../../components/Purpose/Purpose'
import Partners from '../../components/Partners/Partners'
import Support from '../../components/Support/Support'
import ContactForm from '../../components/ContactForm/ContactForm';
// import styles from '@/styles/Home.module.css'

const Home = () => {
  return ( 
    <>
      <Hero/>
      <Support title="Te apoyamos en las diferentes áreas de tu empresa"/>
      <Services title="Servicios"/>
      <Purpose title="Nuestro propósito"/>
      <Partners title="Han confiado en nosotros"/>
      <ContactForm title="Contactános"/>
    </>
   );
}
 
export default Home;
