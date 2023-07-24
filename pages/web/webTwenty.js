import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function webEighteen(){
  return (
    <Layout>
      <Head>
        <title>Avaneer Health | Jonathan A Klein</title>
      </Head>
      <BackButton />
      <div>
        <h1>Avaneer Health</h1>
        <p>
          <strong>Company:</strong> Brado
        </p>
        <p>
          <strong>Position:</strong> Senior Front-End Developer
        </p>
        <p>
          <strong>Technology:</strong> WordPress with{" "}
          <a
            target="_blank"
            rel="nopener noreferrer"
            href="https://oxygenbuilder.com/"
          >
            Oxygen Builder
          </a>
        </p>
        <p>
          <strong>URL:</strong>{" "}
          <a
            target="_blank"
            rel="nopener noreferrer"
            href="https://avaneerhealth.com/"
          >
            https://avaneerhealth.com/
          </a>
        </p>
        <p></p>
        <Image
          src="https://jk-docs.s3.us-east-2.amazonaws.com/images/web/avaneerhealth.png"
          width={1903}
          height={5702}
        />
      </div>
    </Layout>
  );
}