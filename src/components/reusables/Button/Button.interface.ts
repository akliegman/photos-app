import { ButtonHTMLAttributes } from "react";

export enum ButtonType {
  Button = "button",
  Submit = "submit",
  Reset = "reset",
  Link = "link",
  ExternalLink = "external-link",
  Download = "download",
}

export enum ButtonSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
  Ghost = "ghost",
}

export enum ButtonIconPosition {
  Left = "left",
  Right = "right",
}

export type ButtonTypeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type: ButtonType.Button | ButtonType.Submit | ButtonType.Reset;
};

export interface ButtonProps {
  children: React.ReactElement | string;
  icon?: React.ReactElement;
  iconPosition?: ButtonIconPosition;
  type?: ButtonType;
  name?: string;
  to?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  focusable?: boolean;
  onClick?: () => any;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  rest?: any;
}
