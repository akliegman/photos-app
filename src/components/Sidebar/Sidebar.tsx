import styles from "./Sidebar.module.scss";
import { SidebarProps } from "./Sidebar.interface";
import { Header } from "../../components/Header/Header";
import { AlbumNav } from "../../components/AlbumNav/AlbumNav";
import { User } from "../../components/User/User";

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className={styles.Container}>
      <Header className={styles.Header} />
      <AlbumNav className={styles.AlbumNav} />
      <User className={styles.User} />
    </div>
  );
};
