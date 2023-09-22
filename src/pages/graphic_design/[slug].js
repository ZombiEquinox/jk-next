import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import { fetchGraphicDesignProject } from "@/utils";
import BackButton from "@/components/BackBtn";

const graphicDesignPage = ({ data }) => {
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
          <p>{data.description}</p>
        </div>
        <div className="my-6">
          {data.image.map((image) => (
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
  const entries = await fetchGraphicDesignProject(context.params.slug);
  return {
    props: {
      data: entries[0].fields,
    },
  };
}

export default graphicDesignPage;
