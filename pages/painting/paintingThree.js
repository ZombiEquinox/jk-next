import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function paintingThree(){
  return(
    <Layout>
      <Head>
        <title>Turn the Gears of Life | Jonathan A Klein</title>
      </Head>
      <BackButton/>
      <div>
        <h1>Turn the Gears of Life</h1>
        <p>Another part of my abstract series. The gear was something I felt had a very large meaning to it, its part of a bigger peice, and without this one gear all the gears break. Thus the title the gears of Life, without one "gear" people stop functioning. What the "gear" is, is up to you. Some its a vital organ, some its as small as an MP3 player, or a video game. What keeps your "Gears" turning is what you make it.</p>        
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/painting/tpainting3.jpg" width={604} height={453} />
      </div>
    </Layout>
  )
}