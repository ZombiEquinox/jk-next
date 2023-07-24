import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function paintingOne(){
  return(
    <Layout>
      <Head>
        <title>Gamers Still-Life Painting | Jonathan A Klein</title>
      </Head>
      <BackButton/>
      <div>
        <h1>Gamers Still-Life Painting</h1>
        <p>Part of who I am, is a gamer. While trying to figure out a good composition for my piece I wanted to create a piece that not only showed who I am, but what I can do. The objects show a little bit about every part of me. Each peice has a meaning.</p>        
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/painting/tpainting1.jpg" width={604} height={453} />
      </div>
    </Layout>
  )
}