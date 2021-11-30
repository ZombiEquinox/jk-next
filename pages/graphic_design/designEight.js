import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function designEight(){
  return(
    <Layout>
      <Head>
        <title>Flat Comic Book Characters | Jonathan A Klein</title>
      </Head>
      <Link href="/graphic_design">&lt; Back</Link>
      <div>
        <h1>Flat Comic Book Characters</h1>
        <p><strong>Position:</strong> Graphic Designer</p>
        <p>My brother in law Came to me in July of 2014 asking if I could paint my nephew a poster for his birthday, loving my neices and nephews so much I said "yeah, sure". Getting Information about what he wanted the orignal concept was a digital painting of Spiderman, Bumble Bee, Donatello, and Handy Manny</p>
        <p>After a few weeks in my spare time of doing a digital painting of just spider-man, I needed to find a new approach. While trying to sleep one night the idea of a flat character hit me, the next day I started doing research on the idea and did some sketches</p>
        <p>After finishing my first version of spider-man, I went onto Donatello, then I moved onto Bumble bee, I was then going to do Handy Manny, but asked my nephew if there were any other comic book characters he liked, he said Batman, so I changed Handy Manny to batman to keep the consitency of Comic Book Characters</p>
        <p>After posting on my Facebook page and asking for feedback, a lot said that spider-man was a little weak, so I made him completely flat and did a second version. Soon after completion I printed them out for my Nephew to hang up.</p>
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/graphic_design/graphicdesign16.png" width="637px" height="825px" />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/graphic_design/graphicdesign17.jpg" width="637px" height="825px" />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/graphic_design/graphicdesign18.jpg" width="637px" height="825px" />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/graphic_design/graphicdesign19.png" width="637px" height="825px" />
        <Image src="https://jk-docs.s3.us-east-2.amazonaws.com/images/graphic_design/graphicdesign20.png" width="637px" height="825px" />
      </div>
    </Layout>
  )
}