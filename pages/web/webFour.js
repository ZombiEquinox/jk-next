import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function webFour(){
  return(
    <Layout>
      <Head>
        <title>ISU Redbird Typing Game | Jonathan A Klein</title>
      </Head>
      <Link href="/web">&lt; Back</Link>
      <div>
        <h1>ISU Redbird Typing Game</h1>
        <p><strong>Company:</strong> Illinois State University - Web &amp; Interactive Communications</p>
        <p><strong>Position:</strong> Web Design and Developer Intern</p>
        <p><strong>URL:</strong> Website No longer available</p>
        <p><small><strong>Note:</strong> Game no longer available on website</small></p>
        <p>A game for children to get used to typing on a computer. The user will select their difficulty and start typing, the harder the difficulty the harder and longer the words become. There is also a secret mode that I inserted that used video game characters and changes the coloring of the game.</p>
        <Image src='https://jk-docs.s3.us-east-2.amazonaws.com/images/web/website4-1.jpg' width={955} height={492} />
        
        
      </div>
    </Layout>
  )
}