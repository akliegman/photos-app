import { createUrl } from "../../utils/createUrl";
import { PhotoCardProps } from "./PhotoCard.interface";
import styles from "./PhotoCard.module.scss";

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  return (
    <div className={styles.PhotosCard}>
      <img
        src={createUrl(photo.imageUrl)}
        alt={photo.name}
        className={styles.Image}
      />
    </div>
  );
};
