import react, { Dispatch, ReactElement, SetStateAction } from "react";
import BtnNavigation from "./BtnNavigation";
import MenuElement from "./MenuElement";

interface ILocalProps {
  open: boolean;
  showEcran: number;
  setOpen: () => void;
  setShowEcran: Dispatch<SetStateAction<number>>;
}
const Menu = ({ open, setOpen, setShowEcran, showEcran }: ILocalProps): ReactElement => {
  return (
    <>
      <BtnNavigation showEcran={showEcran} setOpen={setOpen} changeEcran={setShowEcran} />
      <MenuElement open={open} setOpen={setOpen} setShowEcran={setShowEcran} />
    </>
  );
};

export default Menu;
