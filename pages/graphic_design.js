import Layout from "../components/layout"
import Head from 'next/head'
import Card from '../components/card'
import { fetchGraphicDesignProjects } from "../src/utils";

export default function GraphDesign(graphic_design){
  let width = 600;
  let height = 600;
  return (
    <Layout>
      <Head>
        <title>Graphic Design | Jonathan A Klein</title>
      </Head>
      <div className="my-6">
        <h1 className="text-center text-base md:text-3xl">Graphic Design</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {graphic_design.data.map((design) => (
          <Card
            key={design.sys.id}
            link={`/graphic_design/${design.fields.graphicDesignId}`}
            title={design.fields.title}
            text="View Description"
            img={design.fields.thumbnail}
            width={width}
            height={height}
          />
        ))}

      </div>
      <div>
        <h2>More Work</h2>
        <h3>State Farm</h3>
        <ul>
          <li>Designed Logo for Project "KnightHawk"</li>
          <li>
            Designed Feature Graphic and Promo Graphic for Android Play Store
            for Project "KnightHawk"
          </li>
          <li>Designed "Icons" for State Farm's "Customer Segmentation"</li>
          <li>Designed Web Icon for State Farm Agent App</li>
          <li>
            Designed logo for Agency Suite of Tools, for State Farm wide
            presentation
          </li>
        </ul>
        <h3>AutonomouStuff</h3>
        <ul>
          <li>
            <strong>Role:</strong> Graphic Designer - Media Guide booklet design
          </li>
          <li>
            <strong>Role:</strong> Graphic Designer - Icon Design
          </li>
          <li>
            <strong>Role:</strong> Graphic Designer - Christmas Card Design
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const entries = await fetchGraphicDesignProjects();
  return {
    props: {
      data: entries,
    },
  };
}