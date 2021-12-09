import Layout from "../components/layout"
import Link from "next/link"
import Head from 'next/head'
import Card from '../components/card'

export default function Video(){
  let width = 600;
  let height = 600;
  return(
    <Layout>
      <Head>
        <title>Video | Jonathan A Klein</title>
      </Head>
      <h1>Videography</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card link="/video/videoOne" title="1min Arduino Commercial" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/video/video1.jpg' width={width} height={height}/>
        <Card link="/video/videoTwo" title="Dance with the Devil in the pale moon light" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/video/video2.jpg' width={width} height={height}/>
        <Card link="/video/videoThree" title="Ari, the 5 Year old Minecraft Player" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/video/video3.jpg' width={width} height={height}/>
        <Card link="/video/videoFour" title="Antistatic Image, an Interview with Ian Emser" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/video/video4.jpg' width={width} height={height}/>
        <Card link="/video/videoFive" title="Conklin's Barn II Dinner &amp; Theatre, History in Central Illinois" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/video/video5.jpg' width={width} height={height}/>
        <Card link="/video/videoSix" title="Video is Art" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/video/video8.jpg' width={width} height={height}/>
        <Card link="/video/videoSeven" title="AutonomouStuff PACMod Systems" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/video/astuff_pacmod_thumb.jpg' width={width} height={height}/>
        <Card link="/video/videoEight" title="AutonomouStuff Open Autonomy Pilot" text="View Description" img='https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/video/astuff-video-1.png' width={width} height={height}/>
      </div>
      <div>
        <h2>Other Work</h2>
        <h3>AutonomouStuff</h3>
        <ul>
          <li><strong>Role:</strong> Video Editor<br/>AutonomouStuff highlight video for <a href="https://hexagon.com/">Hexagon</a></li>
          <li><strong>Role:</strong> Video Editor<br/><a href="https://www.youtube.com/watch?v=vQJvaqjtg6E">What we do at AutonomouStuff</a></li>
          <li><strong>Role:</strong> Video Editor<br/><a href="https://www.youtube.com/watch?v=D8Vf4zb-IWM">Driving downtown Peoria, Illinois demo</a></li>
        </ul>
      </div>
    </Layout>
  )
}