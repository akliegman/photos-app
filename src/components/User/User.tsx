import { selectUser } from "../../store/slices/userSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { CaretIcon } from "../../assets/svg";
import styles from "./User.module.scss";
import { Avatar } from "./Avatar/Avatar";
import clsx from "clsx";
interface UserProps {
  className?: string;
}

export const User: React.FC<UserProps> = ({ className }) => {
  const { user } = useAppSelector(selectUser);
  const classNames = clsx(styles.User, className);

  return (
    <div className={classNames}>
      <Avatar
        className={styles.Avatar}
        character={user?.name?.charAt(0).toUpperCase()}
      />
      <div className={styles.Details}>
        <h4>{user?.name}</h4>
        <small>{user?.email}</small>
      </div>
      <CaretIcon className={styles.CaretIcon} />
    </div>
  );
};
