import styles from "./Modals.module.scss";
import { ModalsProps } from "./Modals.interface";
import { AddAlbumModal } from "./AddAlbumModal/AddAlbumModal";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  selectModal,
  ModalTypes,
  closeModal,
} from "../../store/slices/modalSlice";
import { TransitionGroup, CSSTransition } from "react-transition-group";
export const Modals: React.FC<ModalsProps> = () => {
  const { isOpen, modalType } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const hideModal = () => {
    dispatch(closeModal({}));
  };
  return (
    <CSSTransition
      in={isOpen}
      timeout={250}
      classNames={{
        enter: styles.TransitionEnter,
        enterActive: styles.TransitionEnterActive,
        enterDone: styles.TransitionEnterDone,
        exit: styles.TransitionExit,
        exitActive: styles.TransitionExitActive,
        exitDone: styles.TransitionExitDone,
      }}
      unmountOnExit
    >
      <div className={styles.Container}>
        <div className={styles.Overlay} onClick={hideModal} />
        {modalType && (
          <TransitionGroup component={null}>
            {modalType === ModalTypes.AddAlbum && (
              <CSSTransition
                key={modalType}
                timeout={500}
                classNames={{
                  enter: styles.ModalTransitionEnter,
                  enterActive: styles.ModalTransitionEnterActive,
                  enterDone: styles.ModalTransitionEnterDone,
                  exit: styles.ModalTransitionExit,
                  exitActive: styles.ModalTransitionExitActive,
                  exitDone: styles.ModalTransitionExitDone,
                }}
              >
                <AddAlbumModal />
              </CSSTransition>
            )}
          </TransitionGroup>
        )}
      </div>
    </CSSTransition>
  );
};
