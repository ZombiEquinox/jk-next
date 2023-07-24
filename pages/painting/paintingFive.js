import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function paintingFive(){
  return(
    <Layout>
      <Head>
        <title>Water Flashback | Jonathan A Klein</title>
      </Head>
      <BackButton/>
      <div>
        <h1>Water Flashback</h1>
        <p>When asked to paint an abstracted memory of my past, I painting something I already had an abstracted memory of. My mother once told me the story of when I was a kid I disappeared, again, this time when I was finally found I was in my neighbors backyard, peering into their pool about to fall in. This is my very abstracted memory, since I don't have a lot of vivid memories from when I was younger</p>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/painting/tpainting6.jpg" width={453} height={604} />
      </div>
    </Layout>
  )
}