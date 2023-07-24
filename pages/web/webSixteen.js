import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function webSixteen(){
  return (
    <Layout>
      <Head>
        <title>1PURE CBD | Jonathan A Klein</title>
      </Head>
      <BackButton />
      <div>
        <h1>1PURE CBD</h1>
        <p>
          <strong>Company:</strong> MComm Group
        </p>
        <p>
          <strong>Position:</strong> Web Developer
        </p>
        <p>
          <strong>URL:</strong>{" "}
          <a href="https://www.1purecbd.com/">https://www.1purecbd.com/</a>
        </p>
        <p>
          <strong>Technology:</strong> Shopify
        </p>
        <p></p>
        <Image
          src="https://jk-docs.s3.us-east-2.amazonaws.com/images/web/onepurcbd-home.jpg"
          width={952}
          height={3114}
        />
        <p>Product Page</p>
        <Image
          src="https://jk-docs.s3.us-east-2.amazonaws.com/images/web/onepurcbd-product.jpg"
          width={952}
          height={1683}
        />
      </div>
    </Layout>
  );
}