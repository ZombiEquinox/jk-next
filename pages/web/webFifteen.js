import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import image from '../../public/images/web/home-manitowoc-crawler-crane.jpg'
import image2 from '../../public/images/web/manitowoc-crawler-crane.jpg'

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
        <Image src={image} width="931px" height="2730px" />
        <p>Blog Post</p>                  
        <Image src={image2} width="931px" height="1584px" />                         
      </div>
    </Layout>
  )
}