import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import image from '../../public/images/web/onepurcbd-home.jpg'
import image2 from '../../public/images/web/onepurcbd-product.jpg'

export default function webSixteen(){
  return(
    <Layout>
      <Head>
        <title>1PURE CBD | Jonathan A Klein</title>
      </Head>
      <Link href="/web">&lt; Back</Link>
      <div>
        <h1>1PURE CBD</h1>
        <p><strong>Company:</strong> MComm Group</p>
        <p><strong>Position:</strong> Web Developer</p>
        <p><strong>URL:</strong> <a href="https://www.1purecbd.com/">https://www.1purecbd.com/</a></p>
        <p></p>
        <Image src={image} width="952px" height="3114px" />
        <p>Product Page</p>                  
        <Image src={image2} width="952px" height="1683px" />                         
      </div>
    </Layout>
  )
}