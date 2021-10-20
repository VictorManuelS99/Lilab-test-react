import axios from "../axios/axios";

export const getTags = async () => {
  const { data } = await axios.get<{}, { data: { data: Array<string> } }>(
    "/tag"
  );

  return data;
};
