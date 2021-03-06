import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function designFour(){
  return(
    <Layout>
      <Head>
        <title>End Fat Talk Marquee Image | Jonathan A Klein</title>
      </Head>
      <Link href="/graphic_design">&lt; Back</Link>
      <div>
        <h1>End Fat Talk Marquee Image</h1>
        <p><strong>Company:</strong> Illinois State University - Web &amp; Interactive Communications</p>
        <p><strong>Position:</strong> Front End Developer/Graphic Designer Intern</p>
        <p>This was a marquee image i designed for the ISU counseling department for a program called "End Fat Talk" trying to get more heftier students more comfortable with their bodies and trying to end the teasing of these students</p>
         <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/graphic_design/graphicdesign6.jpg" width="640px" height="270px" />
      </div>
    </Layout>
  )
}