import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./LoadingSkeleton.module.scss";

interface LoadingSkeletonProps {
  placeholder: React.ReactElement;
  children: React.ReactElement;
  loading: boolean;
  timeout?: number;
  transitionClassNames?: {
    enter: string;
    enterActive: string;
    enterDone: string;
    exit: string;
    exitActive: string;
    exitDone: string;
  };
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  placeholder,
  children,
  loading,
  timeout = 250,
  transitionClassNames = {
    enter: styles.TransitionEnter,
    enterActive: styles.TransitionEnterActive,
    enterDone: styles.TransitionEnterDone,
    exit: styles.TransitionExit,
    exitActive: styles.TransitionExitActive,
    exitDone: styles.TransitionExitDone,
  },
}) => {
  return (
    <TransitionGroup component={null}>
      {loading ? (
        <CSSTransition
          key="placeholder"
          timeout={timeout}
          classNames={transitionClassNames}
        >
          {placeholder}
        </CSSTransition>
      ) : (
        <CSSTransition
          key="content"
          timeout={timeout}
          classNames={transitionClassNames}
        >
          {children}
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export const LoadingOverlay = () => {
  return <div className={styles.Overlay} />;
};
