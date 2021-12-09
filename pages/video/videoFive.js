import Layout from '../../components/layout'
import Head from 'next/head'

import Link from 'next/link'

export default function videoFive(){
  return(
    <Layout>
      <Head>
        <title>Conklin's Barn II Dinner &amp; Theatre, History in Central Illinois | Jonathan A Klein</title>
      </Head>
      <Link href="/video">&lt; Back</Link>
      <div>
        <h1>Conklin's Barn II Dinner &amp; Theatre, History in Central Illinois</h1>
        <p><strong>Position:</strong> Illinois State University Student</p>
        <p>Documentary I did about a previous job and relic in Central Illinois, Conklin's Dinner Theatre, it has a rich history and lots of good people.</p>
        <div className="iframeContainer"><iframe src="//player.vimeo.com/video/41570046" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" width="500" height="281" frameborder="0"></iframe></div>
      </div>
    </Layout>
  )
}