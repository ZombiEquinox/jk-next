'use client'
import Layout from "@/components/layout"
import Head from 'next/head'
import Card from '@/components/card'
import { fetchVideoProjects } from "@/utils";

export default function Video(videos){
  let width = 600;
  let height = 600;
  return (
    <Layout>
      <Head>
        <title>Video | Jonathan A Klein</title>
      </Head>
      <div className="my-6">
        <h1 className="text-center text-base md:text-3xl">
          Videography / Editing
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.data.map((video) => (
          <Card
            key={video.sys.id}
            link={`/video/${video.fields.videoId}`}
            title={video.fields.title}
            text="View Description"
            img={video.fields.thumbnail}
            width={width}
            height={height}
          />
        ))}
      </div>
      <div>
        <h2>Other Work</h2>
        <h3>AutonomouStuff</h3>
        <ul>
          <li>
            <strong>Role:</strong> Video Editor
            <br />
            AutonomouStuff highlight video for{" "}
            <a href="https://hexagon.com/">Hexagon</a>
          </li>
          <li>
            <strong>Role:</strong> Video Editor
            <br />
            <a href="https://www.youtube.com/watch?v=vQJvaqjtg6E">
              What we do at AutonomouStuff
            </a>
          </li>
          <li>
            <strong>Role:</strong> Video Editor
            <br />
            <a href="https://www.youtube.com/watch?v=D8Vf4zb-IWM">
              Driving downtown Peoria, Illinois demo
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const entries = await fetchVideoProjects();
  return {
    props: {
      data: entries,
    },
  };
}