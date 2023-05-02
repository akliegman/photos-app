import styles from "./Title.module.scss";
import { TitleProps } from "./Title.interface";
import clsx from "clsx";
import {
  LoadingSkeleton,
  LoadingOverlay,
} from "../LoadingSkeleton/LoadingSkeleton";

const TitlePlaceholder: React.FC = () => {
  return (
    <>
      <LoadingOverlay />
      <div className={styles.TextGroup}>
        <h1 className={styles.Title}>Lorem Ipsum Dolor</h1>
        <h2 className={styles.Subtitle}>(0)</h2>
      </div>
    </>
  );
};

export const Title: React.FC<TitleProps> = ({
  title,
  subtitle,
  loading,
  className,
  children,
}) => {
  const classNames = clsx(styles.Container, className);

  return (
    <div className={classNames}>
      <LoadingSkeleton placeholder={<TitlePlaceholder />} loading={loading}>
        <div className={styles.TextGroup}>
          <h1 className={styles.Title}>{title}</h1>
          {subtitle && <h2 className={styles.Subtitle}>{subtitle}</h2>}
          {children}
        </div>
      </LoadingSkeleton>
    </div>
  );
};
