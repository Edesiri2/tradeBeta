import axios from "axios";
import { BASE_URL } from "@env";

export const Get = async (
  endpoint: string,
  headers?: any, // Specify the correct type for headers
  payload?: Record<string, any> // Use Record<string, any> to type an object payload
): Promise<{ status: number; data?: any }> => {
  try {
    const res = await axios.get(`${BASE_URL}${endpoint}`, {
      headers,
      params: { ...payload }, // Spread payload to pass query parameters
    });

    const { status, data } = res;
    return { status, data };
  } catch (err: any) {
    if (axios.isCancel(err)) {
      console.log("Request was canceled due to timeout");
    } else {
      console.error("Error fetching data:", err.response);
    }

    return {
      status: err.response?.status || err.request?.status || 500,
    };
  }
};
