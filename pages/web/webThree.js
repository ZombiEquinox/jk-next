import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function webThree(){
  return(
    <Layout>
      <Head>
        <title>ISU Redbird Matching Game | Jonathan A Klein</title>
      </Head>
      <Link href="/web">&lt; Back</Link>
      <div>
        <h1>ISU Redbird Matching Game</h1>
        <p><strong>Company:</strong> Illinois State University - Web &amp; Interactive Communications</p>
        <p><strong>Position:</strong> Web Design and Developer Intern</p>
        <p><strong>URL:</strong> Website no longer available</p>
        <p><small><strong>Note:</strong> Game no longer available on website</small></p>
        <p>This is a basic matching game that teaches the kids muscle memory. Images were created by Illinois State University sports design team. The pieces will randomly rearrange themselves every time you play, making it so you can play again and again and having a new experience.</p>
        <Image src='https://jk-docs.s3.us-east-2.amazonaws.com/images/web/website3-1.jpg' width="955px" height="492px"/>
        
        
      </div>
    </Layout>
  )
}