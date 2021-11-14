import Layout from "../components/layout"
import Link from "next/link"
import Head from 'next/head'

export default function Paintings(){
  return(
    <Layout>
      <Head>
        <title>Paintings | Jonathan A Klein</title>
      </Head>
      My Paintings
      <Link href="/painting/painting-one">Painting One</Link>
    </Layout>
  )
}