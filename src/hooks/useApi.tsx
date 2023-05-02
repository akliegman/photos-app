import { groupArrayByKey } from "../utils/groupArrayByKey";
import { useAxios } from "./useAxios";

export const useApi = () => {
  const api = useAxios();

  const getAlbums: () => Promise<any[]> = async () => {
    try {
      const response = await api.get("/albums");
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const getPhotos: () => Promise<any[]> = async () => {
    try {
      const response = await api.get("/photos");
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const uploadPhoto: (photo: any) => Promise<any> = async (photo) => {
    try {
      const response = await api.post("/photos", photo);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { getAlbums, getPhotos, uploadPhoto };
};
