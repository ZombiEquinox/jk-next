import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function paintingSix(){
  return(
    <Layout>
      <Head>
        <title>V for Vendetta - Guy Fawk Abstract Painting | Jonathan A Klein</title>
      </Head>
      <Link href="/painting">&lt; Back</Link>
      <div>
        <h1>V for Vendetta - Guy Fawk Abstract Painting</h1>
        <p>V for vendetta is an amazing movie, has some very valid points that to this day are becomeing more and more true. I wanted something that was abstract, but captured the iconography of the movie.</p>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/painting/tpainting9.jpg" width="453px" height="604px" />
      </div>
    </Layout>
  )
}