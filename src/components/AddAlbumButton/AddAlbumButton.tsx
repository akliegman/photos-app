import { Button } from "../reusables/Button/Button";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { ButtonProps } from "../reusables/Button/Button.interface";
import { openModal, ModalTypes } from "../../store/slices/modalSlice";
export interface CreateAlbumButtonProps {
  className?: string;
  buttonProps?: ButtonProps;
}

export const AddAlbumButton: React.FC<CreateAlbumButtonProps> = ({
  className,
  buttonProps = {},
}) => {
  const dispatch = useAppDispatch();

  const handleCreateAlbum = () => {
    dispatch(openModal({ modalType: ModalTypes.AddAlbum }));
  };

  const allButtonProps = {
    onClick: handleCreateAlbum,
    ...buttonProps,
  };

  return <Button {...allButtonProps}>Create Album</Button>;
};
