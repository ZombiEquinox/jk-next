import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import image from '../../public/images/web/astuff_website.png'

export default function webThirteen(){
  return(
    <Layout>
      <Head>
        <title>AutonomouStuff | Jonathan A Klein</title>
      </Head>
      <Link href="/web">&lt; Back</Link>
      <div>
        <h1>AutonomouStuff</h1>
        <p><strong>Company:</strong> AutonomouStuff</p>
        <p><strong>Position:</strong> Front-End Web Developer/Web Designer/Webmaster</p>
        <p><strong>URL:</strong> <a href="https://autonomoustuff.com/">https://autonomoustuff.com/</a></p>
        <p><small><strong>Note:</strong> Website has since undergone a redesign</small></p>
        <p>Company website built on Wordpress with WooCommerce to manage over 250+ products. Using advanced custom fields to easily build pages and quickly on select templates. Using skills in web development and design I am able to keep the website up to date and active. Using skills in security I keep the website secure with a tight firewall, SSL, amoungst several other security features.</p>
        <Image src={image} width="1905px" height="953px" />                         
      </div>
    </Layout>
  )
}