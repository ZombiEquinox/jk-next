import Layout from "../components/layout"
import Head from 'next/head'
import Card from '../components/card'

export default function Interactive(){
  let width = 600;
  let height = 600;
  return(
    <Layout>
      <Head>
        <title>Interactive Art | Jonathan A Klein</title>
      </Head>
      <h1>Interactive Art</h1>
      <div className="flex justify-center item-stretch flex-wrap">
        <Card link="/interactive/interactiveOne" title="Light Composition I" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/interactive/sculpture1.jpg' width={width} height={height}/>
        <Card link="/interactive/interactiveTwo" title="Girls got Rhythm" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/interactive/sculpture2-1.jpg' width={width} height={height}/>
        <Card link="/interactive/interactiveThree" title="Contoured Analytics" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/interactive/sculpture4.jpg' width={width} height={height}/>
      </div>
    </Layout>
  )
}