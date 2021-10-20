import axios from "../axios/axios";
import { ResponsePosts } from "../types/ResponseTypes";

export const getPosts = async (): Promise<ResponsePosts> => {
  const { data } = await axios.get<{}, { data: ResponsePosts }>("/post");

  return data;
};

export const getPostsByTag = async (tag: string): Promise<ResponsePosts> => {
  const { data } = await axios.get<{}, { data: ResponsePosts }>(
    `/tag/${tag}/post`
  );

  return data;
};
