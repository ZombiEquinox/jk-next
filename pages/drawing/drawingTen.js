import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function drawingTen(){
  return(
    <Layout>
      <Head>
        <title>Contour Nude Study | Jonathan A Klein</title>
      </Head>
      <BackButton/>
      <div>
        <h1>Contour Nude Study</h1>
        <p>A quick nude study done in contour line drawing.</p>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/drawing/drawing13.jpg" width={604} height={453} />
      </div>
    </Layout>
  )
}