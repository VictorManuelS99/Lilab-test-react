import { UserPreview } from "./UserTypes";

export type PostPreview = {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: Array<string>;
  publishDate: string;
  owner: UserPreview;
};

export type Post = {
  id: string;
  text: string;
  image: string;
  likes: number;
  link: string;
  tags: Array<string>;
  publishDate: string;
  owner: UserPreview;
};
