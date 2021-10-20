import { UserPreview } from "./UserTypes";

export type CommentType = {
  id: string;
  message: string;
  owner: UserPreview;
  post: string;
  publishDate: string;
};
