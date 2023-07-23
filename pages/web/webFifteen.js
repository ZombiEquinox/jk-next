import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

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
        <Image src='https://jk-docs.s3.us-east-2.amazonaws.com/images/web/home-manitowoc-crawler-crane.jpg' width={931} height={2730} />
        <p>Blog Post</p>                  
        <Image src='https://jk-docs.s3.us-east-2.amazonaws.com/images/web/manitowoc-crawler-crane.jpg' width={931} height={1584} />                         
      </div>
    </Layout>
  )
}