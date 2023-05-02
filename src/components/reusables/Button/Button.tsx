import styles from "./Button.module.scss";
import {
  ButtonProps,
  ButtonType,
  ButtonTypeProps,
  ButtonIconPosition,
} from "./Button.interface";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { toTitleCase } from "../../../utils/toTitleCase";

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  iconPosition = "left",
  type = "button",
  name,
  to,
  size = "medium",
  variant = "primary",
  focusable = true,
  onClick,
  disabled = false,
  className,
  loading,
  ...rest
}) => {
  const variantClass = toTitleCase(variant);
  const sizeClass = toTitleCase(size);

  const classNames = clsx(
    styles.Button,
    styles[variantClass],
    styles[sizeClass],
    focusable && styles.Focusable,
    disabled && styles.Disabled,
    loading && styles.Loading,
    className
  );

  const childContent = (
    <>
      {icon && iconPosition === ButtonIconPosition.Left && (
        <span className={styles.Icon}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === ButtonIconPosition.Right && (
        <span className={styles.Icon}>{icon}</span>
      )}
    </>
  );

  return (
    <>
      {type === ButtonType.Link ? (
        <Link to={to!} className={classNames} onClick={onClick} {...rest}>
          {childContent}
        </Link>
      ) : type === ButtonType.ExternalLink ? (
        <a href={to!} className={classNames} onClick={onClick} {...rest}>
          {childContent}
        </a>
      ) : type === ButtonType.Download ? (
        <a
          href={to!}
          className={classNames}
          onClick={onClick}
          download
          {...rest}
        >
          {childContent}
        </a>
      ) : (
        <button
          type={type as ButtonTypeProps}
          name={name}
          className={classNames}
          onClick={onClick}
          disabled={disabled}
          {...rest}
        >
          {childContent}
        </button>
      )}
    </>
  );
};
