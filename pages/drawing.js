import Layout from "../components/layout"
import Head from 'next/head'
import Card from '../components/card'
import { fetchDrawingProjects } from "../src/utils";

export default function Drawings(drawings){
  let width = 600;
  let height = 600;
  return (
    <Layout>
      <Head>
        <title>Drawings | Jonathan A Klein</title>
      </Head>
      <div className="my-6">
        <h1 className="text-center text-base md:text-3xl">Drawings</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {drawings.data.map((drawing) => (
          <Card
            key={drawing.sys.id}
            link={`/drawing/${drawing.fields.drawingId}`}
            title={drawing.fields.title}
            text="View Description"
            img={drawing.fields.thumbnail}
            width={width}
            height={height}
          />
        ))}

      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const entries = await fetchDrawingProjects();
  return {
    props: {
      data: entries,
    },
  };
}