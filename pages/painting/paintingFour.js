import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function paintingFour(){
  return(
    <Layout>
      <Head>
        <title>A knot isn't always a Knot | Jonathan A Klein</title>
      </Head>
      <BackButton/>
      <div>
        <h1>A knot isn't always a Knot</h1>
        <p>A painting a did of a simple knot.</p>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/painting/tpainting4.jpg" width={453} height={604} />
      </div>
    </Layout>
  )
}