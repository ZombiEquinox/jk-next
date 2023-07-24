import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function drawingNine(){
  return(
    <Layout>
      <Head>
        <title>Nude Study 4 | Jonathan A Klein</title>
      </Head>
      <BackButton/>
      <div>
        <h1>Nude Study 4</h1>
        <p>Another nude study.</p>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/drawing/drawing12.jpg" width={453} height={604} />
      </div>
    </Layout>
  )
}