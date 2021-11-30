import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function designTwo(){
  return(
    <Layout>
      <Head>
        <title>Art | Jonathan A Klein</title>
      </Head>
      <Link href="/graphic_design">&lt; Back</Link>
      <div>
        <h1>Art</h1>
        <p><strong>Position:</strong> Illinois State University Student</p>
        <p>A minimalist graphic the depict art. While the word "Art" is very broad, the core of art is very simple, to create something. In the renaissance and before the term art was depicted with a paint brush, where my roots come from. Now the term art can be used with any form of medium.</p>
         <Image src='https://jk-docs.s3.us-east-2.amazonaws.com/images/graphic_design/graphicdesign3.jpg' width="898px" height="2700px" />
      </div>
    </Layout>
  )
}