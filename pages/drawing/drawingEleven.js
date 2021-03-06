import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function drawingEleven(){
  return(
    <Layout>
      <Head>
        <title>Human Study 2 | Jonathan A Klein</title>
      </Head>
      <Link href="/drawing">&lt; Back</Link>
      <div>
        <h1>Human Study 2</h1>
        <p>Another Study of the human body.</p>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/drawing/drawing15.jpg" width="453px" height="604px" />
      </div>
    </Layout>
  )
}