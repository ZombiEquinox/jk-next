import Layout from "../components/layout"
import Head from 'next/head'
import Card from '../components/card'

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
        <Card link="/graphic_design/designOne" title="InSanity" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/graphic_design/graphicdesign1.jpg' width={width} height={height}/>
        <Card link="/graphic_design/designTwo" title="Art" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/graphic_design/graphicdesign2.jpg' width={width} height={height}/>
        <Card link="/graphic_design/designThree" title="Illinois Central College ID Card Design" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/graphic_design/graphicdesign4.png' width={width} height={height}/>
        <Card link="/graphic_design/designFour" title="End Fat Talk Marquee" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/graphic_design/graphicdesign16.png' width={width} height={height}/>
        <Card link="/graphic_design/designFive" title="Operation Beautiful Marquee" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/graphic_design/graphicdesign17.png' width={width} height={height}/>
        <Card link="/graphic_design/designSix" title="Body Image Program Marquee" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/graphic_design/graphicdesign18.png' width={width} height={height}/>
        <Card link="/graphic_design/designSeven" title="Hire-A-Redbird Banner" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/graphic_design/graphicdesign9.jpg' width={width} height={height}/>
        <Card link="/graphic_design/designEight" title="Flat Comic Book Characters" text="View Description" img="https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/graphic_design/graphicdesign8.jpg" width={width} height={height}/>
      </div>
    </Layout>
  )
}