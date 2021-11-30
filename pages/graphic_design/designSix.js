import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function designSix(){
  return(
    <Layout>
      <Head>
        <title>Body Image Program Marquee Image | Jonathan A Klein</title>
      </Head>
      <Link href="/graphic_design">&lt; Back</Link>
      <div>
        <h1>Body Image Program Marquee Image</h1>
        <p><strong>Company:</strong> Illinois State University - Web &amp; Interactive Communications</p>
        <p><strong>Position:</strong> Front End Developer/Graphic Designer Intern</p>
        <p>Marquee image I designed for the ISU Counseling department for a program called "Reflections body image program" held by Delta Delta Delta, getting students to love who they are no matter what societies standards are today.</p>
         <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/graphic_design/graphicdesign8.jpg" width="640px" height="270px" />
      </div>
    </Layout>
  )
}