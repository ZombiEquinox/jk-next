import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function drawingSix(){
  return(
    <Layout>
      <Head>
        <title>Facial Study 2 | Jonathan A Klein</title>
      </Head>
      <BackButton/>
      <div>
        <h1>Nude Study 2</h1>
        <p>The angle I drew from was difficult, and it took several attempts to get this view perfect. I loved this one because of the detail in her hair and pillow. The shading shows the detail in her body</p>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/drawing/drawing8.jpg" width={604} height={453} />
      </div>
    </Layout>
  )
}