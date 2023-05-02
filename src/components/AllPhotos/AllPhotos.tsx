import styles from "./AllPhotos.module.scss";
import { Helmet } from "../Helmet/Helmet";
import { PhotosGrid } from "../PhotosGrid/PhotosGrid";
import { Photos, selectPhotos } from "../../store/slices/photosSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Title } from "../Title/Title";
export const AllPhotos: React.FC = () => {
  const { photos, photosLoading } = useAppSelector(selectPhotos);
  return (
    <>
      <Helmet title="All Photos" />
      <Title
        title="All Photos"
        subtitle={`(${photos.length})`}
        loading={photosLoading}
      />
      <PhotosGrid photos={photos} />
    </>
  );
};
