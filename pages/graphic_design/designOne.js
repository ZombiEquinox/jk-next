import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import image from '../../public/images/graphic_design/graphicdesign1.jpg'

export default function designOne(){
  return(
    <Layout>
      <Head>
        <title>Sanity - Insanity | Jonathan A Klein</title>
      </Head>
      <Link href="/graphic_design">&lt; Back</Link>
      <div>
        <h1>InSanity</h1>
        <p><strong>Position:</strong> Illinois State University Student</p>
        <p>When contributing to a book about opposites done by designers, I got the one that I knew most about, Sanity and Insanity. This can actually be done either way. How you perceive the sides is up to the view. there is no wrong way.</p>
         <Image src={image} width="990px" height="495px" />
      </div>
    </Layout>
  )
}