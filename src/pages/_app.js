'use client'
import 'tailwindcss/tailwind.css'
import '@/styles/global.scss'
import 'include-media/dist/_include-media.scss'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

//import * as ga from '@/lib/ga'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  // useEffect(() =>{
  //   const handleRouterChange = (url) =>{
  //     ga.pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouterChange)

  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouterChange)
  //   }
  // }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp
