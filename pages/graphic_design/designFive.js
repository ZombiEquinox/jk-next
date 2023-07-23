import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function designFive(){
  return(
    <Layout>
      <Head>
        <title>Operation Beautiful Marquee Image | Jonathan A Klein</title>
      </Head>
      <Link href="/graphic_design">&lt; Back</Link>
      <div>
        <h1>Operation Beautiful Marquee Image</h1>
        <p><strong>Company:</strong> Illinois State University - Web &amp; Interactive Communications</p>
        <p><strong>Position:</strong> Front End Developer/Graphic Designer Intern</p>
        <p>Marquee image I designed for the ISU Counseling department for a program called "operation beautiful" getting students to love their bodies no matter what shape, size, or color they are, making sure they love who they are for how they were born.</p>
         <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/graphic_design/graphicdesign7.jpg" width={640} height={270} />
      </div>
    </Layout>
  )
}