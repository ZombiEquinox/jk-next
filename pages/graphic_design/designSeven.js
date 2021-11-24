import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import image from '../../public/images/graphic_design/graphicdesign11.jpg'

export default function designSeven(){
  return(
    <Layout>
      <Head>
        <title>Hire-A-Redbird Banner | Jonathan A Klein</title>
      </Head>
      <Link href="/graphic_design">&lt; Back</Link>
      <div>
        <h1>Hire-A-Redbird Banner</h1>
        <p><strong>Company:</strong> Illinois State University - Web &amp; Interactive Communications</p>
        <p><strong>Position:</strong> Front End Developer/Graphic Designer Intern</p>
        <p>Career center marquee image I designed, taking a standard resume that someone would fill out for a job and ripping it up, to reveal the Hire-A-Redbird program that helps students and employers find the right place for them</p>
         <Image src={image} width="640px" height="270px" />
      </div>
    </Layout>
  )
}