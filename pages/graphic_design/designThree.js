import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import image from '../../public/images/graphic_design/graphicdesign4.png'

export default function designThree(){
  return(
    <Layout>
      <Head>
        <title>Illinois Central College ID Card Design | Jonathan A Klein</title>
      </Head>
      <Link href="/graphic_design">&lt; Back</Link>
      <div>
        <h1>Illinois Central College ID Card Design</h1>
        <p><strong>Position:</strong> High School Student</p>
        <p>This is a ID design I entered into a ID contest at Illinois Central College while I was still in high school, ICC students also entered the contest. In the end I won second place out of almost 100 entries, my design was chosen as the new ID card for IT Employees.</p>
         <Image src={image} width="634px" height="800px" />
      </div>
    </Layout>
  )
}