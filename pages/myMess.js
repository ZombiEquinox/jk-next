import Layout from "../components/layout"
import Head from 'next/head'

export default function myMess(){
  return(
    <Layout>
      <Head>
        <title>THIS IS A MESS!! | Jonathan A Klein</title>
      </Head>
      <div className="flex justify-center items-center flex-col">
        <p>Full Disclosure: The current version on my portfolio was thrown together so I could save money and get off my previous host. So things may feel weird until I can create my new version.</p>
        <p>Built in <a href="https://nextjs.org/">NextJS</a>, with <a href="https://tailwindcss.com/">TailwindCSS</a>, and <a href="https://daisyui.com/">DaisyUI</a>.</p>
        <p>Hosted On <a href="https://www.netlify.com/">Netlify</a></p>

      </div>
    </Layout>
  )
}