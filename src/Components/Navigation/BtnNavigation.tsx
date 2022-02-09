import { Dispatch, SetStateAction } from "react";
import Icon from "../Icon";
import BtnEcran from "./BtnEcran";

export interface IBtnMenu {
  open?: boolean;
  showEcran: number;
  setOpen: () => void;
  changeEcran: Dispatch<SetStateAction<number>>;
}

export enum Direction {
  RIGHT,
  LEFT,
}

const BtnMenu = ({ setOpen, changeEcran, showEcran }: IBtnMenu) => {
  const changementEcran = (direction: number) => {
    if (showEcran < 3 && direction === Direction["RIGHT"]) {
      changeEcran((e) => e + 1);
    } else if (showEcran > 0 && direction === Direction["LEFT"]) {
      changeEcran((e) => e - 1);
    }
  };

  return (
    <>
      <div onClick={setOpen} className="menu-Icon">
        <Icon icon="faBars" />
      </div>
      <BtnEcran direction="LEFT" showEcran={showEcran} onClick={() => changementEcran(Direction["LEFT"])} />
      <BtnEcran direction="RIGHT" showEcran={showEcran} onClick={() => changementEcran(Direction["RIGHT"])} />
    </>
  );
};

export default BtnMenu;
