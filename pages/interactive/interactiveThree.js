import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function interactiveThree(){
  return(
    <Layout>
      <Head>
        <title>Contoured Analytics | Jonathan A Klein</title>
      </Head>
      <BackButton/>
      <div>
        <h1>Contoured Analytics</h1>
        <p>Using MaxMSP this lets the user play with tetris pieces to do with whatever they like. It shows the leftbrain right brain function, one side is more analytical being represented in 1's and 0's, while the other side is more creative being represented in a Greenscreen effect, showing what you are doing in the background of what you are doing. </p>
        <div className="iframeContainer"><iframe src="//player.vimeo.com/video/46751844" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" width="500" height="281" frameBorder="0"></iframe></div>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture4-1.jpg" width={604} height={453} />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture4-2.jpg" width={604} height={453} />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture4-3.jpg" width={604} height={453} />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture4-4.jpg" width={604} height={453} />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture4-5.jpg" width={604} height={453} />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/interactive/sculpture4-6.jpg" width={604} height={453} />
      </div>
    </Layout>
  )
}