import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function webEighteen(){
  return(
    <Layout>
      <Head>
        <title>Reimagine Care | Jonathan A Klein</title>
      </Head>
      <BackButton/>
      <div>
        <h1>Reimagine Care</h1>
        <p><strong>Company:</strong> Brado</p>
        <p><strong>Position:</strong> Senior Front-End Developer</p>
        <p><strong>Technology:</strong> Webflow</p>
        <p><strong>URL:</strong> <a href="https://www.reimaginecare.com/">https://www.reimaginecare.com/</a></p>
        <p><small>Note: Website has since gone under a redesign under a new agency</small></p>
        <p></p>
        <Image src='https://jk-docs.s3.us-east-2.amazonaws.com/images/web/reimaginecare.png' width={1903} height={5702} />                       
      </div>
    </Layout>
  )
}