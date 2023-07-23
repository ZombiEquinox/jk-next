import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function webOne(){
  return(
    <Layout>
      <Head>
        <title>Reggie Red Bird Coloring | Jonathan A Klein</title>
      </Head>
      <Link href="/web">&lt; Back</Link>
      <div>
        <h1>Reggie Red Bird Coloring</h1>
        <p><strong>Company:</strong> Illinois State University - Web &amp; Interactive Communications</p>
        <p><strong>Position:</strong> Web Design and Developer Intern</p>
        <p><strong>URL:</strong> Website no longer available</p>
        <p><small><strong>Note:</strong> Game no longer available on website</small></p>
        <p>First game I developed for Illinois State University's Kids Club. The game allows kids to color Reggie with crayon and marker textures with 16 different colors. The user can then print the picture off or reset the whole thing, also allowing for free drawing. The game was developed for easy replacement of the background image to accomidate for any image they would like to choose.</p>
        <Image src='https://jk-docs.s3.us-east-2.amazonaws.com/images/web/website1-1.jpg' width={955} height={492} />        
      </div>
    </Layout>
  )
}