import Layout from "../components/layout"
import Head from 'next/head'
import Link from 'next/link'
import { fetchAboutMe } from "../src/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function About(about){
  return (
    <Layout>
      <Head>
        <title>{about.data.fields.title} | Jonathan A Klein</title>
      </Head>
      <div className="my-6">
        <h1 className="text-center text-base md:text-3xl">
          {about.data.fields.title}
        </h1>
      </div>
      <div>
        {documentToReactComponents(about.data.fields.aboutMe)}
      </div>
      
    </Layout>
  );
}

export async function getStaticProps() {
  const entries = await fetchAboutMe();
  return {
    props: {
      data: entries[0],
    },
  };
}