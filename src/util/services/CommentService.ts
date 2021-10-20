import axios from "../axios/axios";
import { ResponseComments } from "../types/ResponseTypes";

export const getCommentsByPost = async (
  id: string
): Promise<ResponseComments> => {
  const { data } = await axios.get<{}, { data: ResponseComments }>(
    `/post/${id}/comment`
  );

  return data;
};
