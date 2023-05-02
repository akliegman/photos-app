import styles from "./Header.module.scss";
import { Logo } from "../../assets/svg/";
import { Link } from "react-router-dom";
import clsx from "clsx";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const classNames = clsx(styles.Container, className);

  return (
    <div className={classNames}>
      <Link to="/" className={styles.HomeLink}>
        <Logo className={styles.Logo} />
      </Link>
    </div>
  );
};
