import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function drawingThree(){
  return(
    <Layout>
      <Head>
        <title>Ribcage Study | Jonathan A Klein</title>
      </Head>
      <Link href="/drawing">&lt; Back</Link>
      <div>
        <h1>Ribcage Study</h1>
        <p>This is your standard study of a ribcage and pelvis.</p>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/drawing/drawing2.jpg" width={453} height={604} />
      </div>
    </Layout>
  )
}