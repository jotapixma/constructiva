import React from 'react';
import Layout from '@/components/Layouts/Layout/Layout';
import ProyectsPage from '@/components/ProyectsPage/ProyectsPage'
import Head from 'next/head';
import data from '@/utils/data.json';

export default function ProyectosPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Contactanos</title>
        <meta name="description" content=""/>
      </Head>
      <Layout>
        <ProyectsPage proyectos={data}/>
      </Layout>
    </React.Fragment>
  );
}