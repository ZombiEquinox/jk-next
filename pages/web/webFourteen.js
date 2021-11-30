import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function webFourteen(){
  return(
    <Layout>
      <Head>
        <title>AutonomouStuff Data Calculator | Jonathan A Klein</title>
      </Head>
      <Link href="/web">&lt; Back</Link>
      <div>
        <h1>AutonomouStuff Data Calculator</h1>
        <p><strong>Company:</strong> AutonomouStuff</p>
        <p><strong>Position:</strong> Front-End Web Developer/Web Designer</p>
        <p><strong>URL:</strong> No longer available</p>
        <p>While the Sales team is out on the field they always had troubles calculating proper storage amount to quote a price and rough amount to customers and potential customers. To assist in this issue the marketing department created a online calculator to give better esitmated to the sales team and customers to get a better idea on what size of storage they would need to their autonomous vehicles. The tool was build in ReactJS with MaterialUI and hooked into the WordPress API</p>
        <Image src='https://jk-docs.s3.us-east-2.amazonaws.com/images/web/astuff_data.png' width="1905px" height="953px" />                         
      </div>
    </Layout>
  )
}