import axios from "axios";

const useAxios = () => {
  const api = axios.create({
    baseURL: "https://localhost:3000/api",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return api;
};

export default useAxios;
