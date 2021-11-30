import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function paintingTwo(){
  return(
    <Layout>
      <Head>
        <title>Abstract Painting | Jonathan A Klein</title>
      </Head>
      <Link href="/painting">&lt; Back</Link>
      <div>
        <h1>Abstract Painting</h1>
        <p>Part of my small abstract series, tried a few paint drip effects. </p>        
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/painting/tpainting2.jpg" width="604px" height="453px" />
      </div>
    </Layout>
  )
}