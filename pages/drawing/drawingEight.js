import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function drawingEight(){
  return(
    <Layout>
      <Head>
        <title>Human Study 1 | Jonathan A Klein</title>
      </Head>
      <Link href="/drawing">&lt; Back</Link>
      <div>
        <h1>Human Study 1</h1>
        <p>One of my most complex peices, I spend too much time on the folds of the clothing, but in the end I got a majority of the results I wanted.</p>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/drawing/drawing11.jpg" width={53} height={604} />
      </div>
    </Layout>
  )
}