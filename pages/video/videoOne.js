import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'

export default function videoOne(){
  return(
    <Layout>
      <Head>
        <title>1min Arduino Commercial | Jonathan A Klein</title>
      </Head>
      <Link href="/video">&lt; Back</Link>
      <div>
        <h1>1min Arduino Commercial</h1>
        <p><strong>Position:</strong> Illinois State University Student</p>
        <p>A concept commercial I did showing that all great technolgies start off as a simple prototype, and with an arduino you can do just that, and more.</p>
        <iframe src="//player.vimeo.com/video/37926726" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" width="500" height="281" frameborder="0"></iframe>  
      </div>
    </Layout>
  )
}