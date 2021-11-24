import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {Document} from 'react-pdf'

import image from '../../public/images/web/cat-connect.png'

export default function webEleven(){
  return(
    <Layout>
      <Head>
        <title>CAT Connect | Jonathan A Klein</title>
      </Head>
       <Link href="/web">&lt; Back</Link>
      <div>
        <h1>CAT Connect</h1>
        <p><strong>Company:</strong> Onefire</p>
        <p><strong>Position:</strong> Junior Front-End Developer / Designer</p>
        <p><strong>URL:</strong> No longer available</p>
        <p>This project started like every web application project should, a conversation between the developers and the designers. The client wanted this tool to stand out from the rest of the CAT tools that OneFire has done, so we decided to go with Material UI, which is a set of React Components that bring in Google's Material Design. This gave the tool a more modern look, and definetly made it stand out from the rest. The client gave us a Excel file of the calculations and fields that the user needs to enter to get the correct data in return. Having this data made my job a bit easier, I just needed to organize it in a way that would helped the user out, and make the experience enjoyable. After getting the data organized I started working on the UI within Sketch, creating a responsive web app. Once the UI was finished I went over it with our developers making sure what the client wants is doable in the timeframe that they would like, then handing it off to the client. Once the client was happy I handed the project over to the developers and they started on the tool.</p>
        <Image src={image} width="1504px" height="857px" />                           
      </div>
    </Layout>
  )
}