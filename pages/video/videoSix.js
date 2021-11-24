import Layout from '../../components/layout'
import Head from 'next/head'

import Link from 'next/link'

export default function videoSix(){
  return(
    <Layout>
      <Head>
        <title>Video is Art | Jonathan A Klein</title>
      </Head>
      <Link href="/video">&lt; Back</Link>
      <div>
        <h1>Video is Art</h1>
        <p><strong>Position:</strong> Illinois State University Student</p>
        <p>Taking an old open license video and creating something new out of it. Proving that Art comes in every variety.</p>
        <iframe src="//player.vimeo.com/video/36257877" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" width="500" height="375" frameborder="0"></iframe>
        <iframe src="//player.vimeo.com/video/36257582" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" width="500" height="281" frameborder="0"></iframe>
      </div>
    </Layout>
  )
}