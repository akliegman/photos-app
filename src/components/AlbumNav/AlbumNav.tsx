import styles from "./AlbumNav.module.scss";
import { AlbumIcon, AllIcon } from "../../assets/svg";
import { Album, selectAlbums } from "../../store/slices/albumsSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import {
  LoadingSkeleton,
  LoadingOverlay,
} from "../LoadingSkeleton/LoadingSkeleton";
import { AddAlbumButton } from "../AddAlbumButton/AddAlbumButton";

interface AlbumNavProps {
  className?: string;
}

const AlbumNavPlaceholder: React.FC = () => {
  const placeholderNav = [
    { id: 1, name: "Lorem Ipsum Dolor Sit", albumId: 1, published: true },
    { id: 2, name: "Lorem Ipsum Dolor Sit", albumId: 2, published: true },
    { id: 3, name: "Lorem Ipsum Dolor Sit", albumId: 3, published: true },
    { id: 4, name: "Lorem Ipsum Dolor Sit", albumId: 4, published: true },
    { id: 5, name: "Lorem Ipsum Dolor Sit", albumId: 5, published: true },
    { id: 6, name: "Lorem Ipsum Dolor Sit", albumId: 6, published: true },
  ];

  const activeNavLinkClasses = clsx(styles.NavLink, styles.NavLinkActive);
  return (
    <nav className={styles.Nav}>
      <LoadingOverlay />
      <NavLink to="/" className={activeNavLinkClasses}>
        <AllIcon />
        Lorem Ipsum Dolor Sit
      </NavLink>
      {placeholderNav.map((album: Album) => (
        <NavLink
          className={styles.NavLink}
          key={album.id}
          to={`/album/${album.id}`}
        >
          <AlbumIcon />
          <span>{album.name}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export const AlbumNav: React.FC<AlbumNavProps> = ({ className }) => {
  const { albums, albumsLoading } = useAppSelector(selectAlbums);
  const classNames = clsx(styles.Container, className);

  const albumNavLinkClasses: (props: {
    isActive: boolean;
    isPending: boolean;
  }) => string = ({ isActive, isPending }) =>
    clsx(styles.NavLink, (isActive || isPending) && styles.NavLinkActive);

  return (
    <div className={classNames}>
      <LoadingSkeleton
        placeholder={<AlbumNavPlaceholder />}
        loading={albumsLoading}
      >
        <>
          <div className={styles.Actions}>
            <AddAlbumButton className={styles.AddAlbumButton} />
          </div>
          <nav className={styles.Nav}>
            <NavLink to="/" className={albumNavLinkClasses}>
              <AllIcon />
              All Photos
            </NavLink>
            {albums?.map((album: Album) => (
              <NavLink
                className={albumNavLinkClasses}
                key={album.id}
                to={`/album/${album.id}`}
              >
                <AlbumIcon />
                <span>{album.name}</span>
              </NavLink>
            ))}
          </nav>
        </>
      </LoadingSkeleton>
    </div>
  );
};
