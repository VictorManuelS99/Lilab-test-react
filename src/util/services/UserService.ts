import axios from "../axios/axios";
import { UserFull } from "../types/UserTypes";

export const getUserById = async (id: string): Promise<UserFull> => {
  const { data } = await axios.get<{}, { data: UserFull }>(`/user/${id}`);
  return data;
};