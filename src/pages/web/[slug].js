import Layout from "@/components/layout";
import Head from "next/head";
import Image from 'next/image'
import { fetchWebProject } from "@/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BackButton from "@/components/BackBtn";


const webPage = ({ data }) => {
  if (!data) return <div>Loading...</div>;
  return (
    <Layout>
      <Head>
        <title>{data.title} | Jonathan A Klein</title>
      </Head>
      <div className="container mt-4">
        <BackButton />
        <h1>{data.title}</h1>
        <p>Company: {data.company}</p>
        <p>Position: {data.role}</p>
        <p>Technology: {data.technology}</p>
        <p>URL: {data.url ? <a target="_blank" rel="nopener noreferrer" href={data.url}>{data.url}</a> : "No Longer Available"}</p>
        {data.notes ? <p>Note: {data.notes}</p> : null}
        <div className="my-6">
          {documentToReactComponents(data.description)}
        </div>
        <div className="my-6">
          {data.images
            ? data.images.map((image, index) => (
                <Image
                  key={index}
                  alt={image.fields.title}
                  src={`https:${image.fields.file.url}`}
                  width={image.fields.file.details.image.width}
                  height={image.fields.file.details.image.height}
                />
              ))
            : null}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  
  const entries = await fetchWebProject(context.params.slug);
  return {
    props: {
      data: entries[0].fields,
    },
  };
}

export default webPage;

