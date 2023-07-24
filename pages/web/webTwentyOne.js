import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function webTwentyOne(){
  return (
    <Layout>
      <Head>
        <title>American Giants | Jonathan A Klein</title>
      </Head>
      <BackButton />
      <div>
        <h1>American Giants</h1>
        <p>
          <strong>Company:</strong> Brado
        </p>
        <p>
          <strong>Position:</strong> Senior Front-End Developer
        </p>
        <p>
          <strong>Technology:</strong> Webflow
        </p>
        <p>
          <strong>URL:</strong>{" "}
          <a
            target="_blank"
            rel="nopener noreferrer"
            href="https://www.americangiants.org/"
          >
            https://www.americangiants.org/
          </a>
        </p>
        <p>This client was brought to Brado by a previous Employee. The purpose of American Giants to is to promote baseball with minority communities for the youth and to help boost minority coaches.</p>
        <Image
          src="https://jk-docs.s3.us-east-2.amazonaws.com/images/web/American-Giants.png"
          width={1903}
          height={5702}
        />
      </div>
    </Layout>
  );
}