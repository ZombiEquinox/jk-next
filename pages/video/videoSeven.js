import Layout from '../../components/layout'
import Head from 'next/head'

import Link from 'next/link'

export default function videoSeven(){
  return(
    <Layout>
      <Head>
        <title>AutonomouStuff PACMod Systems | Jonathan A Klein</title>
      </Head>
      <Link href="/video">&lt; Back</Link>
      <div>
        <h1>AutonomouStuff PACMod Systems</h1>
        <p><strong>Company:</strong> AutonomouStuff</p>
        <p><strong>Position:</strong> Video Editor</p>
        <p>Interviewing Director of Engineering and Embedded Systems Engeering Manager about AutonomouStuff PACMod system and why it's the best option to use. Editing using Adobe Premiere Pro and Adobe After Effects</p>
        <iframe src="https://www.youtube.com/embed/dsqwqSkC0vc" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
      </div>
    </Layout>
  )
}