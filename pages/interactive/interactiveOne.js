import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function interactiveOne(){
  return(
    <Layout>
      <Head>
        <title>Light Composition I | Jonathan A Klein</title>
      </Head>
      <Link href="/interactive">&lt; Back</Link>
      <div>
        <h1>Light Composition I</h1>
        <p>Using an arduino I controlled several strands of green and red christmas lights and well as some green and red LEDs. The point of this was to get a reaction and evoke the feeling almost everyone has a small part of. OCD - Obsessive Compulsive Disorder. I envoke that reaction by using two different squares, one straight and one off center, it starts with them all lines up, then they shut off all at the same time. slowly they turn on then off at random times, while some lights are brighter and some are darker and some turn off later than others. whether you have OCD or not, i've gotten the reaction from multiple people who just want to go up and fix it. The whole piece is over 5 feel tall and 8 feel long, this give you the overwhelming feeling of powerlessness and makes the user uncomfortable, in a lot of ways.</p>
        <div className="iframeContainer"><iframe src="//player.vimeo.com/video/36628513" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" width="500" height="281" frameBorder="0"></iframe></div>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture1-1.jpg" width={453} height={604} />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture1-2.jpg" width={604} height={453} />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture1-3.jpg" width={604} height={453} />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture1-4.jpg" width={453} height={604} />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture1-5.jpg" width={453} height={604} />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture1-6.jpg" width={604} height={453} />
      </div>
    </Layout>
  )
}