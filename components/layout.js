import Menu from './menu';
import Head from 'next/head';

export default function Layout({children}){
  return(
    <div className="container mx-auto">
      <Head>
        <title>Jonathan A Klein</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu/>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        {children}
      </main>
      <footer>
        &copy; 2021
      </footer>
    </div>
  )
}