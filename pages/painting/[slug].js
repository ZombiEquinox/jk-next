import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";
import { fetchPaintingProject } from "../../src/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BackButton from "../../components/BackBtn";

const paintingPage = ({ data }) => {
  if (!data) return <div>Loading...</div>;
  return (
    <Layout>
      <Head>
        <title>{data.title} | Jonathan A Klein</title>
      </Head>
      <div className="container mt-4">
        <BackButton />
        <h1>{data.title}</h1>
        <p>Medium: {data.medium}</p>
        {data.notes ? <p>Note: {data.notes}</p> : null}
        <div className="my-6">
          {documentToReactComponents(data.description)}
        </div>
        <div className="my-6">
          <Image
            alt={data.images.fields.title}
            src={`https:${data.images.fields.file.url}`}
            width={data.images.fields.file.details.image.width}
            height={data.images.fields.file.details.image.height}
          />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const entries = await fetchPaintingProject(context.params.slug);
  return {
    props: {
      data: entries[0].fields,
    },
  };
}

export default paintingPage;
