import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function paintingSeven(){
  return(
    <Layout>
      <Head>
        <title>Nude Study Painting | Jonathan A Klein</title>
      </Head>
      <BackButton/>
      <div>
        <h1>Nude Study Painting</h1>
        <p>A nude study I painting on a ceiling tile. I wanted it the be bland, but exciting. I stuck to earth tones to give it the "I see these colors every day" feel. So it would be ignored. but also give the feeling of something is there, to make the viewer stop and stare.</p>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/painting/tpainting10.jpg" width={453} height={604} />
      </div>
    </Layout>
  )
}