import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function webTwelve(){
  return (
    <Layout>
      <Head>
        <title>Oak Lawn Estates | Jonathan A Klein</title>
      </Head>
      <BackButton />
      <div>
        <h1>Oak Lawn Estates</h1>
        <p>
          <strong>Company:</strong> Onefire
        </p>
        <p>
          <strong>Position:</strong> Junior Front-End Developer / Designer
        </p>
        <p>
          <strong>URL:</strong> No longer available
        </p>
        <p>
          <strong>Technology:</strong> WordPress
        </p>
        <p>
          After a consultant failed to deliver this project, OneFire decided to
          bring this in-house. Oak lawn website was a fantastic website, to
          bring a old design and modernize it. With a theme purchased we
          customized it and added the content that they needed, once site
          development was complete I created a training guide for the people
          working at Oak lawn. After training I customized the theme even more
          to help with a few items that were unnecessary for the location of Oak
          lawn.
        </p>
        <Image
          src="https://jk-docs.s3.us-east-2.amazonaws.com/images/web/oaklawn.png"
          width={1440}
          height={794}
        />
      </div>
    </Layout>
  );
}