import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";


export default function webSeven(){
  return (
    <Layout>
      <Head>
        <title>Greater Peoria Works | Jonathan A Klein</title>
      </Head>
      <BackButton />
      <div>
        <h1>Greater Peoria Works</h1>
        <p>
          <strong>Company:</strong> Onefire
        </p>
        <p>
          <strong>Position:</strong> Junior Front-End Developer
        </p>
        <p>
          <strong>URL:</strong> Website no longer available
        </p>
        <p>
          <strong>Technology:</strong> WordPress
        </p>
        <p>
          Commissioned by Peoria CEO Council to build a site for Peoria,
          Illinois to help local employers post job openings and local citizens
          search for job openings.
        </p>
        <Image
          src="https://jk-docs.s3.us-east-2.amazonaws.com/images/web/greaterpeoriaworks.jpg"
          width={1902}
          height={1084}
        />
        <Image
          src="https://jk-docs.s3.us-east-2.amazonaws.com/images/web/greaterpeoriaworks-1.png"
          width={1902}
          height={1084}
        />
      </div>
    </Layout>
  );
}