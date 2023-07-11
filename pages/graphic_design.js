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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card link="/graphic_design/designOne" title="InSanity" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/graphic_design/graphicdesign1.jpg'/>
        <Card link="/graphic_design/designTwo" title="Art" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/graphic_design/graphicdesign2.jpg'/>
        <Card link="/graphic_design/designThree" title="Illinois Central College ID Card Design" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/graphic_design/graphicdesign4.png' width={width} height={height}/>
        <Card link="/graphic_design/designFour" title="End Fat Talk Marquee" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/graphic_design/graphicdesign16.png' width={width} height={height}/>
        <Card link="/graphic_design/designFive" title="Operation Beautiful Marquee" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/graphic_design/graphicdesign17.png' width={width} height={height}/>
        <Card link="/graphic_design/designSix" title="Body Image Program Marquee" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/graphic_design/graphicdesign18.png' width={width} height={height}/>
        <Card link="/graphic_design/designSeven" title="Hire-A-Redbird Banner" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/graphic_design/graphicdesign9.jpg' width={width} height={height}/>
        <Card link="/graphic_design/designEight" title="Flat Comic Book Characters" text="View Description" img="https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/graphic_design/graphicdesign8.jpg" width={width} height={height}/>
      </div>
      <div>
        <h2>More Work</h2>
        <h3>State Farm</h3>
        <ul>
          <li>Designed Logo for Project "KnightHawk"</li>
          <li>Designed Feature Graphic and Promo Graphic for Android Play Store for Project "KnightHawk"</li>
          <li>Designed "Icons" for State Farm's "Customer Segmentation"</li>
          <li>Designed Web Icon for State Farm Agent App</li>
          <li>Designed logo for Agency Suite of Tools, for State Farm wide presentation</li>
        </ul>
        <h3>AutonomouStuff</h3>
        <ul>
          <li><strong>Role:</strong> Graphic Designer - Media Guide booklet design</li>
          <li><strong>Role:</strong> Graphic Designer - Icon Design</li>
          <li><strong>Role:</strong> Graphic Designer - Christmas Card Design</li>
        </ul>
      </div>
    </Layout>
  )
}