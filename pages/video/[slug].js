import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";
import { fetchVideoProject } from "../../src/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BackButton from "../../components/BackBtn";

const videoPage = ({ data }) => {
  if (!data) return <div>Loading...</div>;
  return (
    <Layout>
      <Head>
        <title>{data.title} | Jonathan A Klein</title>
      </Head>
      <div className="container mt-4">
        <BackButton />
        <h1>{data.title}</h1>
        {data.company ? <p>Company: {data.company}</p> : null}
        {data.position ? <p>Position: {data.position}</p> : null}
        <div className="my-6">
          {documentToReactComponents(data.description)}
        </div>
        <div className="my-6">
          {data.vimeoUrl ? (
            <div className="iframeContainer">
              <iframe
                src={data.vimeoUrl}
                webkitallowfullscreen=""
                mozallowfullscreen=""
                allowFullScreen=""
                width="500"
                height="281"
              ></iframe>
            </div>
          ) : null}
          {data.youtubeUrl ? (
            <div className="iframeContainer">
              <iframe
                src={data.youtubeUrl}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
                width="560"
                height="315"
                frameborder="0"
              ></iframe>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const entries = await fetchVideoProject(context.params.slug);
  return {
    props: {
      data: entries[0].fields,
    },
  };
}

export default videoPage;
