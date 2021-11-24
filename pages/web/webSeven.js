import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import image from '../../public/images/web/greaterpeoriaworks.jpg'
import image2 from '../../public/images/web/greaterpeoriaworks-1.png'

export default function webSeven(){
  return(
    <Layout>
      <Head>
        <title>Greater Peoria Works | Jonathan A Klein</title>
      </Head>
      <Link href="/web">&lt; Back</Link>
      <div>
        <h1>Greater Peoria Works</h1>
        <p><strong>Company:</strong> Onefire</p>
        <p><strong>Position:</strong> Junior Front-End Developer</p>
        <p><strong>URL:</strong> Website no longer available</p>
        <p>Commissioned by Peoria CEO Council to build a site for Peoria, Illinois to help local employers post job openings and local citizens search for job openings.</p>
        <Image src={image} width="1902px" height="1084px" />        
        <Image src={image2} width="1902px" height="1084px" />        
      </div>
    </Layout>
  )
}