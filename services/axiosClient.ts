import axios, { AxiosResponse } from "axios";

const axiosClient = axios.create({
  baseURL: "https://api-zingmp3-vercel.vercel.app/api",
  headers: {
    "content-type": "application/json",
  },
  //   paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
