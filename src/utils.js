import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});


export async function fetchWebProjects() {
  const response = await client.getContentType('web');
  const webProjects = await client.getEntries();

  if(webProjects.items) return webProjects.items;
}


export default { fetchWebProjects };