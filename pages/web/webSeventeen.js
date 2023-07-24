import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function webSeventeen(){
  return (
    <Layout>
      <Head>
        <title>Potain Self-Erecting Crawler Crane | Jonathan A Klein</title>
      </Head>
      <BackButton />
      <div>
        <h1>Potain Self-Erecting Crawler Crane</h1>
        <p>
          <strong>Company:</strong> MComm Group
        </p>
        <p>
          <strong>Position:</strong> Web Developer
        </p>
        <p>
          <strong>Technology:</strong> WordPress
        </p>
        <p>
          <strong>URL:</strong>{" "}
          <a href="https://www.potainbuildbetter.com/">
            https://www.potainbuildbetter.com/
          </a>
        </p>
        <p></p>
        <Image
          src="https://jk-docs.s3.us-east-2.amazonaws.com/images/web/potain-home.jpg"
          width={952}
          height={1991}
        />
      </div>
    </Layout>
  );
}