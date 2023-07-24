import Layout from "../components/layout"
import Head from 'next/head'
import Card from '../components/card'

export default function Interactive(){
  let width = 600;
  let height = 600;
  return (
    <Layout>
      <Head>
        <title>Interactive Art | Jonathan A Klein</title>
      </Head>
      <div className="my-6">
        <h1 className="text-center text-base md:text-3xl">
          Interactive Art
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          link="/interactive/interactiveOne"
          title="Light Composition I"
          text="View Description"
          img="https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/interactive/sculpture1.jpg"
          width={width}
          height={height}
        />
        <Card
          link="/interactive/interactiveTwo"
          title="Girls got Rhythm"
          text="View Description"
          img="https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/interactive/sculpture2-1.jpg"
          width={width}
          height={height}
        />
        <Card
          link="/interactive/interactiveThree"
          title="Contoured Analytics"
          text="View Description"
          img="https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/interactive/sculpture4.jpg"
          width={width}
          height={height}
        />
      </div>
    </Layout>
  );
}