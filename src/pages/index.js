import Head from 'next/head'
import Layout from '../components/Layouts/Layout/Layout';
import { Inter } from 'next/font/google'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Purpose from '../components/Purpose/Purpose'
import Partners from '../components/Partners/Partners'
import ContactForm from '../components/ContactForm/ContactForm';
import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Constructora LV</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Layout>
          <Hero/>
          <Services title="Servicios"/>
          <Purpose title="Nuestro propósito"/>
          <Partners title="Han confiado en nosotros"/>
          <ContactForm title="Contactános"/>
        </Layout>
      </main>
    </>
  )
}
