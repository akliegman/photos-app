import { AvatarProps } from "./Avatar.interface";
import styles from "./Avatar.module.scss";
import clsx from "clsx";

export const Avatar: React.FC<AvatarProps> = ({ className, character }) => {
  const classNames = clsx(styles.Avatar, className);
  return (
    <div className={classNames}>
      <span>{character}</span>
    </div>
  );
};
