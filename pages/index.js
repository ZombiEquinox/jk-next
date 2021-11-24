import LayoutHome from '../components/layouthome'
import Card from '../components/card'
import Head from 'next/head';

import web from '../public/images/thumb/web/bep.jpg'
import video from '../public/images/thumb/video/video5.jpg'
import graphics from '../public/images/thumb/graphic_design/graphicdesign8.jpg'
import painting from '../public/images/thumb/painting/tpainting4.jpg'
import drawing from '../public/images/thumb/drawing/drawing4.jpg'
import interactive from '../public/images/thumb/interactive/sculpture4-2.jpg'


export default function Home() {
  let width = 600;
  let height = 600;
  return (
    <LayoutHome>
      <Head>
        <title>Home | Jonathan A Klein</title>
      </Head>
      <section id="portfolio">
        <div className="flex justify-center item-stretch flex-wrap">
          <Card link="/web" title="Web Development and Design" text="View Web" img={web} width={width} height={height}/>
          <Card link="/video" title="Videography" text="View Videos" img={video} width={width} height={height}/>
          <Card link="/graphic_design" title="Graphic Design" text="View Graphic Design" img={graphics} width={width} height={height}/>
          <Card link="/painting" title="Paintings" text="View Paintings" img={painting} width={width} height={height}/>
          <Card link="/drawing" title="Drawings" text="View Drawings" img={drawing} width={width} height={height}/>
          <Card link="/interactive" title="Interactive Art" text="view Interactive" img={interactive} width={width} height={height}/>          
        </div>      
      </section>
    </LayoutHome>
  )
}
