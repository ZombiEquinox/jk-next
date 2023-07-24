import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from "../../components/BackBtn";

export default function webEight(){
  return (
    <Layout>
      <Head>
        <title>PixelPrediction | Jonathan A Klein</title>
      </Head>
      <BackButton />
      <div>
        <h1>PixelPrediction</h1>
        <p>
          <strong>Company:</strong> Onefire
        </p>
        <p>
          <strong>Position:</strong> Junior Front-End Developer / Designer
        </p>
        <p>
          <strong>URL:</strong>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://pixelpredictive.com/"
          >
            https://pixelpredictive.com/
          </a>
        </p>
        <p>
          <strong>Technology:</strong> WordPress
        </p>
        <p>
          <small>
            <strong>NOTE:</strong> Site has gone under a minor redesign
          </small>
        </p>
        <p>
          Hired by Oktoer Naseim to build a Marketing site for his startup
          business doing Data Visualization. This presented a challenge to us to
          bring in aspects of what Oktoer does into the design of his site.
          SInce he uses data, we decided to keep the site clean, sharp, and very
          analyical, representing the clean data that he will be working with
          for his client. The next challenge was working with a Microsoft tool
          called PowerBi, and being able to cleanly, and effectivly, integrate
          it into his website. What we ended up doing was using an iFrame for
          the dashboards he was putting up, and wrapping those in a custom DIV
          so they would be easily viewable on a smartphone. The client also
          wanted a video hero section, this presented yet another challenge, how
          do we show a video that represents data, that isn't super tacky but
          also gets the point across. After some searching I found a video one
          blurred lights in traffic. The video was roughly 30 seconds load and
          eventually cleared up, I took this video shortened it down to a few
          seconds and created in infinite loop with the traffic lights. The
          video represents the points of data continuously moving and changing.
        </p>
        <Image
          src="https://jk-docs.s3.us-east-2.amazonaws.com/images/web/pixelpredictive.jpg"
          alt="Pixel Predictive"
          width={955}
          height={492}
        />
      </div>
    </Layout>
  );
}