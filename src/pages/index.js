import Layout from '../components/Layouts/Layout/Layout';
import Home from '../components/Home/Home';

// const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <>
      <main>
        <Layout>
          <Home/>
        </Layout>
      </main>
    </>
  )
}
