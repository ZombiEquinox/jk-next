import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import image from '../../public/images/web/StudentHealth.jpg'

export default function webSix(){
  return(
    <Layout>
      <Head>
        <title>ISU Student Health Services | Jonathan A Klein</title>
      </Head>
      <Link href="/web">&lt; Back</Link>
      <div>
        <h1>ISU Student Health Services</h1>
        <p><strong>Company:</strong> Illinois State University - Web &amp; Interactive Communications</p>
        <p><strong>Position:</strong> Web Design and Developer Intern</p>
        <p><strong>URL:</strong> <a href="http://healthservices.illinoisstate.edu/">http://healthservices.illinoisstate.edu/</a></p>
        <p><small><strong>Note:</strong> Site has since gone under a minor redesign</small></p>
        <p>Health Services was a collaborative effort between me and another designer. I Designed the graphic behind the Hours section and did some minor developing on the site, while she did the rest of the development work.</p>
        <Image src={image} width="1504px" height="857px" />
        
      </div>
    </Layout>
  )
}