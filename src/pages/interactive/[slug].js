import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import { fetchInteractiveProject } from "@/utils";
import BackButton from "@/components/BackBtn";

const InteractivePage = ({ data }) => {
  if (!data) return <div>Loading...</div>;
  return (
    <Layout>
      <Head>
        <title>{data.title} | Jonathan A Klein</title>
      </Head>
      <div className="container mt-4">
        <BackButton />
        <h1>{data.title}</h1>

        <div className="my-6">
          <p>{data.description}</p>
        </div>
        <div className="iframeContainer">
          <iframe
            src={data.video}
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowFullScreen=""
            width="500"
            height="281"
          ></iframe>
        </div>
        <div className="my-6">
          {data.images.map((image) => (
            <Image
              key={image.sys.id}
              alt={image.fields.title}
              src={`https:${image.fields.file.url}`}
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
              priority={true}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const entries = await fetchInteractiveProject(context.params.slug);
  return {
    props: {
      data: entries[0].fields,
    },
  };
}

export default InteractivePage;
