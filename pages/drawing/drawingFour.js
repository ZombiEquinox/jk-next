import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function drawingFour(){
  return(
    <Layout>
      <Head>
        <title>Nude Study 1 | Jonathan A Klein</title>
      </Head>
      <Link href="/drawing">&lt; Back</Link>
      <div>
        <h1>Nude Study 1</h1>
        <p>This was one of the nude studies that I have done. This piece was a collaboration piece. I would start the drawing, after a certain period of time, we would change drawers and the next person would build off of mine, then another person would trade with them, and so on.</p>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/drawing/drawing6.jpg" width={604} height={453} />
      </div>
    </Layout>
  )
}