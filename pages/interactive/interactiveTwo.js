import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function interactiveTwo(){
  return(
    <Layout>
      <Head>
        <title>Girls got Rhythm | Jonathan A Klein</title>
      </Head>
      <Link href="/interactive">&lt; Back</Link>
      <div>
        <h1>Girls got Rhythm</h1>
        <p>Controlled by an arduino and motors, this "instrument" creates it's own music, keeping a beat, and playing "notes". When presented it was accompanied by Avenged Sevenfold, then Other Music, while no two songs were alike, it kept the beat and started to "play" along. The idea behind it is music is a universal language. While some don't interpret the same song the same way, we all hear or feel it the same. this way meant to allow the listener to hear it's music, and allow them to make sense of how they hear it.</p>
        <iframe src="//player.vimeo.com/video/36628708" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" width="500" height="281" frameBorder="0"></iframe>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture2-1.jpg" width="604px" height="453px" />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture2-2.jpg" width="604px" height="453px" />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture2-3.jpg" width="604px" height="453px" />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture2-4.jpg" width="604px" height="453px" />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture2-5.jpg" width="604px" height="453px" />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture2-6.jpg" width="604px" height="453px" />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture2-7.jpg" width="604px" height="453px" />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture2-8.jpg" width="604px" height="453px" />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture2-9.jpg" width="604px" height="453px" />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture2-10.jpg" width="604px" height="453px" />
      </div>
    </Layout>
  )
}