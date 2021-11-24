import Layout from "../components/layout"
import Link from "next/link"
import Head from 'next/head'
import Card from '../components/card'

import designOne from '../public/images/thumb/graphic_design/graphicdesign1.jpg'
import designTwo from '../public/images/thumb/graphic_design/graphicdesign2.jpg'
import designThree from '../public/images/thumb/graphic_design/graphicdesign4.png'
import designFour from '../public/images/thumb/graphic_design/graphicdesign16.png'
import designFive from '../public/images/thumb/graphic_design/graphicdesign17.png'
import designSix from '../public/images/thumb/graphic_design/graphicdesign18.png'
import designSeven from '../public/images/thumb/graphic_design/graphicdesign9.jpg'
import designEight from '../public/images/thumb/graphic_design/graphicdesign8.jpg'

export default function GraphDesign(){
  let width = 600;
  let height = 600;
  return(
    <Layout>
      <Head>
        <title>Graphic Design | Jonathan A Klein</title>
      </Head>
      <h1>Graphic Design</h1>
      <div className="flex justify-center item-stretch flex-wrap">
        <Card link="/graphic_design/designOne" title="InSanity" text="View Description" img={designOne} width={width} height={height}/>
        <Card link="/graphic_design/designTwo" title="Art" text="View Description" img={designTwo} width={width} height={height}/>
        <Card link="/graphic_design/designThree" title="Illinois Central College ID Card Design" text="View Description" img={designThree} width={width} height={height}/>
        <Card link="/graphic_design/designFour" title="End Fat Talk Marquee" text="View Description" img={designFour} width={width} height={height}/>
        <Card link="/graphic_design/designFive" title="Operation Beautiful Marquee" text="View Description" img={designFive} width={width} height={height}/>
        <Card link="/graphic_design/designSix" title="Body Image Program Marquee" text="View Description" img={designSix} width={width} height={height}/>
        <Card link="/graphic_design/designSeven" title="Hire-A-Redbird Banner" text="View Description" img={designSeven} width={width} height={height}/>
        <Card link="/graphic_design/designEight" title="Flat Comic Book Characters" text="View Description" img={designEight} width={width} height={height}/>
      </div>
    </Layout>
  )
}