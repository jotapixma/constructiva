import SingleProyect from '@/components/SingleProyect/SingleProyect';
import Layout from '@/components/Layouts/Layout/Layout';
import data from '@/utils/data.json';

const proyectos = data;

export default function ProyectoDetailPage({ proyecto }) {
  if (!proyecto) {
    return <p>Proyecto no encontrado.</p>;
  }

  return (
    <Layout>
      <SingleProyect
        proyecto={proyecto}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = proyectos.map((proyecto) => ({
    params: { id: proyecto.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const proyecto = proyectos.find((proy) => proy.id.toString() === params.id);

  return { props: { proyecto } };
}