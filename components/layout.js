import Menu from './menu';
import Footer from './footer'
import Head from 'next/head';

export default function Layout({children}){
  return(
    <div>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Menu/>
      <main className="container min-h-screen mx-auto px-4 py-4">
        {children}
      </main>
      <Footer/>
    </div>
  )
}