import styles from "./Sidebar.module.scss";
import * as React from "react";

interface Props {
  children: React.ReactNode;
}

export const Sidebar: React.FC<Props> = ({ children }) => {
  return <div className={styles.Sidebar}>{children}</div>;
};
