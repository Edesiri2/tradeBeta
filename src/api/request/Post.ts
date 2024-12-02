import axios from "axios";
import { BASE_URL } from "@env";

export const Post = async (endpoint: string, payload: any, headers: any) => {
  try {
    const { data, status } = await axios.post(
      `${BASE_URL}/${endpoint}`,
      payload,
      headers
    );
    // const { status, data } = res;
    console.log(data);
    return { status, data };
  } catch (err: any) {
    const error = err;
    if (error.response) {
      return { status: error.request.status, data: null };
    } else if (error.request) {
      console.log(error.request);
      return { status: error.request.status, data: null };
    } else {
      console.log("Error", error.message);
      return { status: error.request.status, data: null };
    }
  }
};
