import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function webEighteen(){
  return(
    <Layout>
      <Head>
        <title>Avaneer Health | Jonathan A Klein</title>
      </Head>
      <Link href="/web">&lt; Back</Link>
      <div>
        <h1>Avaneer Health</h1>
        <p><strong>Company:</strong> Brado</p>
        <p><strong>Position:</strong> Senior Front-End Developer</p>
        <p><strong>Platform:</strong> WordPress</p>
        <p><strong>URL:</strong> <a href="https://avaneerhealth.com/">https://avaneerhealth.com/</a></p>
        <p></p>
        <Image src='https://jk-docs.s3.us-east-2.amazonaws.com/images/web/avaneerhealth.png' width="1903px" height="5702px" />                       
      </div>
    </Layout>
  )
}