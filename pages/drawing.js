import Layout from "../components/layout"
import Head from 'next/head'
import Card from '../components/card'

export default function Drawings(){
  let width = 600;
  let height = 600;
  return(
    <Layout>
      <Head>
        <title>Drawings | Jonathan A Klein</title>
      </Head>
      <h1>Graphic Design</h1>
      <div className="flex justify-center item-stretch flex-wrap">
        <Card link="/drawing/drawingOne" title="Gamers Still Life Drawing" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/drawing/drawing1.jpg' width={width} height={height}/>
        <Card link="/drawing/drawingTwo" title="I'm burning Inside" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/drawing/drawing2.jpg' width={width} height={height}/>
        <Card link="/drawing/drawingThree" title="Ribcage Study" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/drawing/drawing4.jpg' width={width} height={height}/>
        <Card link="/drawing/drawingFour" title="Nude Study 1" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/drawing/drawing6.jpg' width={width} height={height}/>
        <Card link="/drawing/drawingFive" title="Facial Study 1" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/drawing/drawing7.jpg' width={width} height={height}/>
        <Card link="/drawing/drawingSix" title="Nude Study 2" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/drawing/drawing8.jpg' width={width} height={height}/>
        <Card link="/drawing/drawingSeven" title="Nude Study 3" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/drawing/drawing10.jpg' width={width} height={height}/>
        <Card link="/drawing/drawingEight" title="Human Study 1" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/drawing/drawing11.jpg' width={width} height={height}/>
        <Card link="/drawing/drawingNine" title="Nude Study 4" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/drawing/drawing12.jpg' width={width} height={height}/>
        <Card link="/drawing/drawingTen" title="Contour Nude Study" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/drawing/drawing13.jpg' width={width} height={height}/>
        <Card link="/drawing/drawingEleven" title="Human Study 2" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/drawing/drawing15.jpg' width={width} height={height}/>
      </div>
    </Layout>
  )
}