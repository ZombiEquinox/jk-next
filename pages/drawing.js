import Layout from "../components/layout"
import Link from "next/link"
import Head from 'next/head'

export default function Drawings(){
  return(
    <Layout>
      <Head>
        <title>Drawings | Jonathan A Klein</title>
      </Head>
      My Drawings
      <Link href="/drawing/drawing-one">Drawing One</Link>
    </Layout>
  )
}