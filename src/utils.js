import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});


export async function fetchWebProjects() {
  const response = await client.getContentType('web');
  const webProjects = await client.getEntries(
    { content_type: 'web' },
  );

  if(webProjects.items) return webProjects.items;
}

export async function fetchWebProject(slug) {
  const response = await client.getEntries({
    content_type: 'web',
    'fields.webId': slug,
  });

  if(response.items) return response.items;
}

export async function fetchDrawingProjects() {
  const response = await client.getContentType("drawings");
  const drawings = await client.getEntries({ content_type: "drawings" });

  if (drawings.items) return drawings.items;
}

export async function fetchDrawingProject(slug) {
  const response = await client.getEntries({
    content_type: "drawings",
    "fields.drawingId": slug,
  });

  if (response.items) return response.items;
}

export async function fetchPaintingProjects() {
  const response = await client.getContentType("paintings");
  const paintings = await client.getEntries({ content_type: "paintings" });

  if (paintings.items) return paintings.items;
}

export async function fetchPaintingProject(slug) {
  const response = await client.getEntries({
    content_type: "paintings",
    "fields.paintingId": slug,
  });

  if (response.items) return response.items;
}

export async function fetchGraphicDesignProjects() {
  const response = await client.getContentType("graphicDesign");
  const graphicDesigns = await client.getEntries({
    content_type: "graphicDesign",
  });

  if (graphicDesigns.items) return graphicDesigns.items;
}

export async function fetchGraphicDesignProject(slug) {
  const response = await client.getEntries({
    content_type: "graphicDesign",
    "fields.graphicDesignId": slug,
  });

  if (response.items) return response.items;
}

export async function fetchInteractiveProjects() {
  const response = await client.getContentType("interactive");
  const interactive = await client.getEntries({
    content_type: "interactive",
  });

  if (interactive.items) return interactive.items;
}

export async function fetchInteractiveProject(slug) {
  const response = await client.getEntries({
    content_type: "interactive",
    "fields.interactiveId": slug,
  });

  if (response.items) return response.items;
}

export async function fetchVideoProjects() {
  const response = await client.getContentType("video");
  const video = await client.getEntries({
    content_type: "video",
  });

  if (video.items) return video.items;
}

export async function fetchVideoProject(slug) {
  const response = await client.getEntries({
    content_type: "video",
    "fields.videoId": slug,
  });

  if (response.items) return response.items;
}

export async function fetchAboutMe() {
  const response = await client.getEntries({
    content_type: "about",
  });

  if (response.items) return response.items;
}

export default { fetchWebProjects, fetchWebProject, fetchDrawingProjects, fetchDrawingProject, fetchPaintingProjects, fetchPaintingProject, fetchGraphicDesignProjects, fetchGraphicDesignProject, fetchInteractiveProjects, fetchInteractiveProject };