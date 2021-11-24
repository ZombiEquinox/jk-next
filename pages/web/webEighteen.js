import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import image from '../../public/images/web/bep.jpg'

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
        <Image src={image} width="1427px" height="3005px" />                       
      </div>
    </Layout>
  )
}