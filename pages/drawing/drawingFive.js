import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function drawingFive(){
  return(
    <Layout>
      <Head>
        <title>Facial Study 1 | Jonathan A Klein</title>
      </Head>
      <Link href="/drawing">&lt; Back</Link>
      <div>
        <h1>Facial Study 1</h1>
        <p>The model had lovely hair and a lot of defined facial features that I couldn't capture from my angle. While this isn't the best facial drawing I've done, I feel it shows the complexity in her hair.</p>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/drawing/drawing7.jpg" width={453} height={604} />
      </div>
    </Layout>
  )
}