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


export default { fetchWebProjects, fetchWebProject };