import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function drawingTwo(){
  return(
    <Layout>
      <Head>
        <title>I'm burning Inside | Jonathan A Klein</title>
      </Head>
      <Link href="/drawing">&lt; Back</Link>
      <div>
        <h1>I'm burning Inside</h1>
        <p>While doing a study on a skeleton, I decided to use brown charcoal instead of your standard Black or White, the results gave the bones a burning sensation. Which at my that point of my life felt about right.</p>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/drawing/drawing2.jpg" width="453px" height="604px" />
      </div>
    </Layout>
  )
}