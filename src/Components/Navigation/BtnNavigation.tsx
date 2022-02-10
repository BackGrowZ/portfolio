import react, { Dispatch, SetStateAction } from "react";
import Icon from "../Icon";
import BtnEcran from "./BtnEcran";

export interface IBtnMenu {
  showEcran: number;
  setOpen: () => void;
  changeEcran: Dispatch<SetStateAction<number>>;
}

export enum Direction {
  RIGHT,
  LEFT,
}

const BtnMenu = ({ setOpen, changeEcran, showEcran }: IBtnMenu) => {
  const changementEcran = (direction: Direction) => {
    if (showEcran < 3 && direction === Direction.RIGHT) {
      changeEcran((e) => e + 1);
    } else if (showEcran > 0 && direction === Direction.LEFT) {
      changeEcran((e) => e - 1);
    }
  };

  return (
    <>
      <div onClick={setOpen} className="menu-Icon">
        <Icon icon="faBars" />
      </div>
      <BtnEcran direction={Direction.LEFT} showEcran={showEcran} onClick={changementEcran} />
      <BtnEcran direction={Direction.RIGHT} showEcran={showEcran} onClick={changementEcran} />
    </>
  );
};

export default BtnMenu;
