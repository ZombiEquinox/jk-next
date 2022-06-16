import Menu from './menu';
import Footer from './footer'
import Head from 'next/head';
import HomeHero from '../components/homehero'

export default function LayoutHome({children}){
  return(
    <div id="page">
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu/>
      <HomeHero/>
      <main className="container min-h-screen mx-auto px-4 py-4">
        {children}
      </main>
      <Footer/>
    </div>
  )
}