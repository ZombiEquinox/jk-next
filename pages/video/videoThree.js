import Layout from '../../components/layout'
import Head from 'next/head'

import Link from 'next/link'

export default function videoThree(){
  return(
    <Layout>
      <Head>
        <title>Ari, the 5 Year old Minecraft Player | Jonathan A Klein</title>
      </Head>
      <Link href="/video">&lt; Back</Link>
      <div>
        <h1>Ari, the 5 Year old Minecraft Player</h1>
        <p><strong>Position:</strong> Illinois State University Student</p>
        <p>Documentary I did about my neice Ari, who was 5 at the time of filming and loved Minecraft and played all the time. She could make some really aweosme stuff that would give me a run for my money</p>
         <div className="iframeContainer"><iframe src="//player.vimeo.com/video/39170222" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" width="500" height="281" frameborder="0"></iframe></div>
      </div>
    </Layout>
  )
}