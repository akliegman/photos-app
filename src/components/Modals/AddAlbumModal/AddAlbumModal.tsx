import styles from "./AddAlbumModal.module.scss";
import { AddAlbumModalProps } from "./AddAlbumModal.interface";

export const AddAlbumModal: React.FC<AddAlbumModalProps> = () => {
  return (
    <div className={styles.Container}>
      <h2>Create Album</h2>
    </div>
  );
};
