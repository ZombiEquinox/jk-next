import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function webTwo(){
  return(
    <Layout>
      <Head>
        <title>ISU Redbird Ball Catch Game | Jonathan A Klein</title>
      </Head>
      <Link href="/web">&lt; Back</Link>
      <div>
        <h1>ISU Redbird Ball Catch Game</h1>
        <p><strong>Company:</strong> Illinois State University - Web &amp; Interactive Communications</p>
        <p><strong>Position:</strong> Web Design and Developer Intern</p>
        <p><strong>URL:</strong> Website no longer available</p>
        <p><small><strong>Note:</strong> Game no longer available on website</small></p>
        <p>Another game I developed for Illinois State University's Kids Club. Using the W, A, S, D keys on the keyboard the user has 35 seconds to pick up the football as many times as they can. Once time is up they can either play again or cancel. The goal is to allow users to experience gaming on a PC using the W,A,S,D keys and for them to see if they can beat their last score. A stretch goal was the put a leaderboard or a last score on the board, but due to time contrainst I was unable to add it into the game.</p>
        <Image src='https://jk-docs.s3.us-east-2.amazonaws.com/images/web/website2-1.jpg' width="955px" height="492px" />
        
        
      </div>
    </Layout>
  )
}