import Layout from '../../components/layout'
import Head from 'next/head'

import Link from 'next/link'

export default function videoThree(){
  return(
    <Layout>
      <Head>
        <title>Antistatic Image, an Interview with Ian Emser | Jonathan A Klein</title>
      </Head>
      <Link href="/video">&lt; Back</Link>
      <div>
        <h1>Antistatic Image, an Interview with Ian Emser</h1>
        <p><strong>Position:</strong> Illinois State University Student</p>
        <p>A Documentary about one of my best friends, Ian Emser, who had a web comic named AntiStatic Image. His site is sadly no longer active.</p>
        <div className="iframeContainer"><iframe src="//player.vimeo.com/video/38739305" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" width="500" height="281" frameborder="0"></iframe></div>
      </div>
    </Layout>
  )
}