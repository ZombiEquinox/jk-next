import Layout from "../components/layout"
import Link from "next/link"
import Head from 'next/head'
import Card from '../components/card'


export default function Paintings(){
  let width = 600;
  let height = 600;
  return (
    <Layout>
      <Head>
        <title>Paintings | Jonathan A Klein</title>
      </Head>
      <div className="my-6">
        <h1 className="text-center text-base md:text-3xl">
          Paintings
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          link="/painting/paintingOne"
          title="Gamers Still-Life Painting"
          text="View Description"
          img="https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/painting/tpainting1.jpg"
          width={width}
          height={height}
        />
        <Card
          link="/painting/paintingTwo"
          title="Abstract Painting"
          text="View Description"
          img="https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/painting/tpainting2.jpg"
          width={width}
          height={height}
        />
        <Card
          link="/painting/paintingThree"
          title="Turn the Gears of Life"
          text="View Description"
          img="https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/painting/tpainting3.jpg"
          width={width}
          height={height}
        />
        <Card
          link="/painting/paintingFour"
          title="A knot isn't always a Knot"
          text="View Description"
          img="https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/painting/tpainting4.jpg"
          width={width}
          height={height}
        />
        <Card
          link="/painting/paintingFive"
          title="Water Flashback"
          text="View Description"
          img="https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/painting/tpainting6.jpg"
          width={width}
          height={height}
        />
        <Card
          link="/painting/paintingSix"
          title="V for Vendetta - Guy Fawk Abstract Painting"
          text="View Description"
          img="https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/painting/tpainting9.jpg"
          width={width}
          height={height}
        />
        <Card
          link="/painting/paintingSeven"
          title="Nude Study Painting"
          text="View Description"
          img="https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/painting/tpainting10.jpg"
          width={width}
          height={height}
        />
      </div>
    </Layout>
  );
}