import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'

export default function videoTwo(){
  return(
    <Layout>
      <Head>
        <title>Dance with the Devil in the pale moon light | Jonathan A Klein</title>
      </Head>
      <Link href="/video">&lt; Back</Link>
      <div>
        <h1>Dance with the Devil in the pale moon light</h1>
        <p><strong>Position:</strong> Illinois State University Student</p>
        <p>Typographical video I did about the orgins of Batman. <strong>WARNING:</strong> The end music is loud. sorry</p>
         <div className="iframeContainer"><iframe src="//player.vimeo.com/video/37085782" webkitallowfullscreen="" mozallowsullscreen="" allowFullScreen="" width="500" height="281" frameborder="0"></iframe></div>
      </div>
    </Layout>
  )
}