import Menu from './menu';
import Footer from './footer'
import Head from 'next/head';
import HomeHero from '../components/homehero'

export default function LayoutHome({children}){
  return(
    <div>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Menu/>
      <HomeHero/>
      <main className="container mx-auto px-4 py-4">
        {children}
      </main>
      <Footer/>
    </div>
  )
}