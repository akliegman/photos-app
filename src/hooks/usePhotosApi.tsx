import useAxios from "./index";

const usePhotosApi = () => {
  const api = useAxios();

  const getPhotos = async () => {
    try {
      const response = await api.get("/photos");
      return response.data;
    } catch (error) {
      console.error(error);
    }

    return [];
  };

  const getPhoto = async (id: number) => {
    try {
      const response = await api.get(`/photos/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const uploadPhoto = async (photo: any) => {
    try {
      const response = await api.post("/photos", photo);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { getPhotos, getPhoto, uploadPhoto };
};

export default usePhotosApi;
