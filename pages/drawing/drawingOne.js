import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function drawingOne(){
  return(
    <Layout>
      <Head>
        <title>Gamers Still Life Drawing | Jonathan A Klein</title>
      </Head>
      <BackButton/>
      <div>
        <h1>Gamers Still Life Drawing</h1>
        <p>With this piece I wanted to capture my life at that time. I was a hardcore gamer, I was pretty much single and in College. I lived the life of a gamer, played games, watched anime, and drank copious amounts of caffiene.</p>
        <p>With the Xbox box, Hellsing Box, Sephiroth statue, Bawls Bottle and Ramune bottles, I captured just that. That was my life, the clown lighter was my thought of my life, I thought my life was a joke and it was going down in flames.</p>
        <p>This was done in a reverse drawing style, The canvas was covered in powdered charcoal then a kneeded eraser was used to remove layers of charcoal.</p>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/drawing/drawing1.jpg" width={453} height={604} />
      </div>
    </Layout>
  )
}