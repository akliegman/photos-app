import axios from "axios";

export const useAxios = () => {
  const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_HOSTNAME}/api`,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return api;
};
