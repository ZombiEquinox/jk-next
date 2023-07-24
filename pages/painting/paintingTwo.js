import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function paintingTwo(){
  return(
    <Layout>
      <Head>
        <title>Abstract Painting | Jonathan A Klein</title>
      </Head>
      <BackButton/>
      <div>
        <h1>Abstract Painting</h1>
        <p>Part of my small abstract series, tried a few paint drip effects. </p>        
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/painting/tpainting2.jpg" width={604} height={453} />
      </div>
    </Layout>
  )
}