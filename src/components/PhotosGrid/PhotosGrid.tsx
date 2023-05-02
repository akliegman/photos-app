import clsx from "clsx";
import styles from "./PhotosGrid.module.scss";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { PhotoCard } from "../PhotoCard/PhotoCard";
import { PhotosGridProps } from "./PhotosGrid.interface";

export const PhotosGrid: React.FC<PhotosGridProps> = ({
  className,
  photos,
}) => {
  const classNames = clsx(styles.Container, className);

  return (
    <div className={classNames}>
      <ResponsiveMasonry
        className={styles.Grid}
        columnsCountBreakPoints={{ 480: 1, 768: 2, 1024: 3 }}
      >
        <Masonry gutter="30px">
          {photos?.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};
