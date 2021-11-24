import Layout from "../components/layout"
import Link from "next/link"
import Head from 'next/head'

export default function Interactive(){
  return(
    <Layout>
      <Head>
        <title>Interactive Art | Jonathan A Klein</title>
      </Head>
      My Interactive Art
      <Link href="/interactive/work-one">Painting One</Link>
    </Layout>
  )
}