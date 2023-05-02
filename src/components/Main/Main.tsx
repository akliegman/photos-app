import styles from "./Main.module.scss";
import { MainProps } from "./Main.interface";

export const Main: React.FC<MainProps> = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};
