import Layout from '../../components/layout'
import Head from 'next/head'

import Link from 'next/link'

export default function videoEight(){
  return(
    <Layout>
      <Head>
        <title>AutonomouStuff Open Autonomy Pilot | Jonathan A Klein</title>
      </Head>
      <Link href="/video">&lt; Back</Link>
      <div>
        <h1>AutonomouStuff Open Autonomy Pilot</h1>
        <p><strong>Company:</strong> AutonomouStuff</p>
        <p><strong>Position:</strong> Video Editor</p>
        <p></p>
        <div className="iframeContainer"><iframe width="560" height="315" src="https://www.youtube.com/embed/sOecNUXNsH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      </div>
    </Layout>
  )
}