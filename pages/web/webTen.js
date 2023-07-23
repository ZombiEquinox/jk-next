import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function webTen(){
  return(
    <Layout>
      <Head>
        <title>Peoria Riverplex Mobile App | Jonathan A Klein</title>
      </Head>
      <Link href="/web">&lt; Back</Link>
      <div>
        <h1>Peoria Riverplex</h1>
        <p><strong>Company:</strong> Onefire</p>
        <p><strong>Position:</strong> Junior Front-End Developer / Designer</p>
        <p><strong>URL:</strong> No longer available</p>
        <p>One of my first projects I started when I joined OneFire, and a project I was still on a year later. For this project I learned React and Cordova, along with eventually learning SQL. When I started the design for this app was already done, so I didn't get any say on the design. We started off building this as a stand alone app, so building a Admin side and the Client side, eventually when RiverPlex asked us to work on their website as well, we wanted the process to be seemless for them, so we took away the admin side and created some hooks for them to have to only enter in information on WordPress, this caused some issues with their schedule. The Theme we purchased for the website has a weird way of storing classes, and the Component we used to the Calendar on the app, only accepted JSON objects. So we had to build something for the app to call to be able get the classes from the WordPress database. This is where I learned SQL, by build a series of SQL calls we were able to construct a series of JSON objects for the component to call. Currently the call is very slow, and have been looking into for this call.</p>
        <Image src='https://jk-docs.s3.us-east-2.amazonaws.com/images/web/riverplex-app.png' width={720} height={1280} />              
        <Image src='https://jk-docs.s3.us-east-2.amazonaws.com/images/web/riverplex-app1.png' width={720} height={1280} />              
      </div>
    </Layout>
  )
}