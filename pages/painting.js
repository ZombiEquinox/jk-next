import Layout from "../components/layout"
import Link from "next/link"
import Head from 'next/head'
import Card from '../components/card'
import { fetchPaintingProjects } from "../src/utils";


export default function Paintings(paintings){
  let width = 600;
  let height = 600;
  return (
    <Layout>
      <Head>
        <title>Paintings | Jonathan A Klein</title>
      </Head>
      <div className="my-6">
        <h1 className="text-center text-base md:text-3xl">Paintings</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paintings.data.map((painting) => (
          <Card
            key={painting.sys.id}
            link={`/painting/${painting.fields.paintingId}`}
            title={painting.fields.title}
            text="View Description"
            img={painting.fields.thumbnail}
            width={width}
            height={height}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const entries = await fetchPaintingProjects();
  return {
    props: {
      data: entries,
    },
  };
}