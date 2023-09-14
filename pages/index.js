import LayoutHome from '../components/layouthome'
import Card from '../components/card'
import Head from 'next/head';
import HomeHero from '../components/homehero';



export default function Home() {
  let width = 600;
  let height = 600;

  const cards = [
    {
      link: "/web",
      title: "Web Development and Design",
      text: "View Web",
      img: "https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/web/avaneerhealth.jpg",
    },
    {
      link: "/video",
      title: "Videography",
      text: "View Videos",
      img: "https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/video/video5.jpg",
    },
    {
      link: "/graphic_design",
      title: "Graphic Design",
      text: "View Graphic Design",
      img: "https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/graphic_design/graphicdesign9.jpg",
    },
    {
      link: "/painting",
      title: "Paintings",
      text: "View Paintings",
      img: "https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/painting/tpainting4.jpg",
    },
    {
      link: "/drawing",
      title: "Drawings",
      text: "View Drawings",
      img: "https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/drawing/drawing4.jpg",
    },
    {
      link: "/interactive",
      title: "Interactive Art",
      text: "view Interactive",
      img: "https://jk-docs.s3.us-east-2.amazonaws.com/images/thumb/interactive/sculpture4-2.jpg",
    },
  ]

  return (
    <LayoutHome>
      <Head>
        <title>Home | Jonathan A Klein</title>
      </Head>
      <HomeHero/>
      <section className='container' id="portfolio">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
         {cards.map((card, index) => (
            <Card key={index} link={card.link} title={card.title} text={card.text} img={card.img} width={width} height={height}/>
         ))}        
        </div>      
      </section>
    </LayoutHome>
  )
}
