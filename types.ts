import { PortableTextBlock } from "sanity";

export type Project = {
  id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};
export type Product = {
  _id?: string;
  _createdAt?: Date;
  name: string;
  slug?: string;
  image: string;
  price: string;
  description: PortableTextBlock[];
};

export type localStorageType = {
  key: string;
  value?: any;
};
export type MyContextType = {
  state: any;
  dispatch: any;
};
