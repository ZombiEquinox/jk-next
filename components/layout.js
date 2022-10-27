import Menu from './menu';
import Drawer from './drawer';
import Footer from './footer'
import Head from 'next/head';

export default function Layout({children}){
  return(
    <div id="page">
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className='drawer drawer-end'>
         <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className='drawer-content'>
        <Menu/>
        <div className="container min-h-screen mx-auto px-4 py-4 drawer">
          {children}          
        </div>        
        <Footer/>
        </div>
        <Drawer/>
      </main>
    </div>
  )
}