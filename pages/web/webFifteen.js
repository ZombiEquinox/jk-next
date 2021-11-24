import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import image from '../../public/images/web/home-manitowoc-crawler-crane.png'
import image2 from '../../public/images/web/manitowoc-crawler-crane.png'

export default function webFifteen(){
  return(
    <Layout>
      <Head>
        <title>Manitowoc Small Crawler Crane | Jonathan A Klein</title>
      </Head>
      <Link href="/web">&lt; Back</Link>
      <div>
        <h1>Manitowoc Small Crawler Crane</h1>
        <p><strong>Company:</strong> MComm Group</p>
        <p><strong>Position:</strong> Web Developer</p>
        <p><strong>URL:</strong> <a href="https://crawlercranes.manitowoc.com/">https://crawlercranes.manitowoc.com/</a></p>
        <p></p>
        <Image src={image} width="1241px" height="3639px" />
        <p>Blog Post</p>                  
        <Image src={image2} width="1241px" height="2111px" />                         
      </div>
    </Layout>
  )
}