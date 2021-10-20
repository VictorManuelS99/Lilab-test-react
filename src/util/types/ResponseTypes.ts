import { CommentType } from "./CommentTypes";
import { PostPreview } from "./PostTypes";

export type ResponsePosts = {
  data: Array<PostPreview>;
  total: number;
  page: number;
  limit: number;
};

export type ResponseComments = {
  data: Array<CommentType>;
  total: number;
  page: number;
  limit: number;
};
