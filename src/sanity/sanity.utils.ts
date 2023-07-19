import { createClient, groq } from "next-sanity";
import { Product } from "@/types";

export function getProjects(): Promise<Product[]> {
  const client = createClient({
    projectId: "g81vi27j",
    dataset: "production",
    apiVersion: "2023-04-03",
    useCdn: false,
  });
  return client.fetch(
    groq`*[_type == "product"]{
_id,
_createdAt,
name,
"slug":slug.current,
"image":image.asset->url,
price,
description
 }`
  );
}
