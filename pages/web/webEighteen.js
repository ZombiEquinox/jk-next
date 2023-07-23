import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function webEighteen(){
  return(
    <Layout>
      <Head>
        <title>Best Estimate Pro | Jonathan A Klein</title>
      </Head>
      <Link href="/web">&lt; Back</Link>
      <div>
        <h1>Best Estimate Pro</h1>
        <p><strong>Company:</strong> MComm Group</p>
        <p><strong>Position:</strong> Web Developer</p>
        <p><strong>URL:</strong> <a href="https://www.bestestimatepro.com/">https://www.bestestimatepro.com/</a></p>
        <p></p>
        <Image src='https://jk-docs.s3.us-east-2.amazonaws.com/images/web/bep.jpg' width={1427} height={3005} />                       
      </div>
    </Layout>
  )
}