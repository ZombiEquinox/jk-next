import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function drawingSeven(){
  return(
    <Layout>
      <Head>
        <title>Nude Study 3 | Jonathan A Klein</title>
      </Head>
      <Link href="/drawing">&lt; Back</Link>
      <div>
        <h1>Nude Study 3</h1>
        <p>I tried a different art style here and made the lines faster and sketchier, and the shading a bit darker.</p>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/drawing/drawing10.jpg" width={453} height={604} />
      </div>
    </Layout>
  )
}