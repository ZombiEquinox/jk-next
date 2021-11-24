import Layout from "../components/layout"
import Link from "next/link"
import Head from 'next/head'
import Card from '../components/card'

import paintingOne from '../public/images/thumb/graphic_design/graphicdesign1.jpg'

export default function Paintings(){
  let width = 600;
  let height = 600;
  return(
    <Layout>
      <Head>
        <title>Paintings | Jonathan A Klein</title>
      </Head>
      <h1>Paintings</h1>
      <div className="flex justify-center item-stretch flex-wrap">
        <Card link="/graphic_design/paintingOne" title="InSanity" text="View Description" img={paintingOne} width={width} height={height}/>
      </div>
    </Layout>
  )
}