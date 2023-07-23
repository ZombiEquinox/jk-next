import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function webFive(){
  return(
    <Layout>
      <Head>
        <title>ISU Association of Black Academic Employees | Jonathan A Klein</title>
      </Head>
      <Link href="/web">&lt; Back</Link>
      <div>
        <h1>ISU Association of Black Academic Employees</h1>
        <p><strong>Company:</strong> Illinois State University - Web &amp; Interactive Communications</p>
        <p><strong>Position:</strong> Web Design and Developer Intern</p>
        <p><strong>URL:</strong> <a href="http://abae.illinoisstate.edu/">http://abae.illinoisstate.edu/</a></p>
        <p><small><strong>Note:</strong> Site has since gone under a minor redesign</small></p>
        <p>First Site I did at ISU, I designed the overlay on the carousel. The layout is a standard Illinois State University Layout</p>
        <Image src='https://jk-docs.s3.us-east-2.amazonaws.com/images/web/ABAE.jpg' width={955} height={492} />        
      </div>
    </Layout>
  )
}