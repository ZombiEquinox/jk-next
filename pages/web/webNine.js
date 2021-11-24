import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import image from '../../public/images/web/riverplex.png'

export default function webNine(){
  return(
    <Layout>
      <Head>
        <title>Peoria Riverplex | Jonathan A Klein</title>
      </Head>
      <Link href="/web">&lt; Back</Link>
      <div>
        <h1>Peoria Riverplex</h1>
        <p><strong>Company:</strong> Onefire</p>
        <p><strong>Position:</strong> Junior Front-End Developer / Designer</p>
        <p><strong>URL:</strong> <a href="https://riverplex.org/">https://riverplex.org/</a></p>
        <p><a href="../pdf/RiverplexWebsiteWireframe.pdf">Download Wireframe</a></p>
        <p>A project that went through many iderations until we landed on its current design. After the Development of the RiverPlex mobile app, the Peoria RiverPlex hired OneFire to design a new Website for them. Starting with a Flow to get content in the correct spot instead of being unorganized, we wanted to make sure all content was accounted for and was in the approitate place. The Design process started with us looking through some WordPress theme and finding one that fit the needs of the clients. Once the correct theme was chosen we explored the theme and looked at its capabilities, then starting Design in Adobe Illustrator with Wireframes then Mockups. Once we got approval from the client we started to develop the site and pulling data. To simplify the app, we changed how the app data is pulled in, and created some hooks for the app to be pulling in data from the website so RiverPlex only has one place to update information on two places. The final design was landed in a joint collaboration between Lyndon Perry and myself, bringing in colors from their application and some colors from their logo. The hero image was shot by Lydon Perry, Spencer Cree and Jeremy Imagei. After I recieved all videography I took time and looked through each video and peiced together a seemless video for their hero section.</p>
        <Image src={image} width="1902px" height="1084px" />              
      </div>
    </Layout>
  )
}