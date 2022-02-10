import react, { useEffect, useState } from "react";
import { Page } from "../../App";
import Icon from "../Icon";
import { Direction } from "./BtnNavigation";

interface ILocalProps {
  showEcran: number;
  direction: Direction;
  onClick: (direction: Direction) => void;
}

const BtnEcran = ({ showEcran, direction, onClick }: ILocalProps) => {
  const [isHoover, setIsHoover] = useState(false);

  useEffect(() => {
    setIsHoover(false);
  }, [showEcran]);

  const nbRef = direction === Direction.RIGHT ? 3 : 0;
  const upOrDown = direction === Direction.RIGHT ? 1 : -1;
  const ICON = direction === Direction.RIGHT ? "faAngleRight" : "faAngleLeft";
  const CLASS = direction === Direction.RIGHT ? "nav-Right" : "nav-Left";
  const Label = isHoover && <span className="nav-label">{Page[showEcran + upOrDown]}</span>;
  const iconAndLabel =
    direction === Direction.RIGHT ? (
      <>
        {Label} <Icon icon={ICON} />
      </>
    ) : (
      <>
        <Icon icon={ICON} /> {Label}
      </>
    );

  if (showEcran !== nbRef) {
    return (
      <div onMouseEnter={() => setIsHoover(true)} onMouseLeave={() => setIsHoover(false)} onClick={() => onClick(direction)} className={CLASS}>
        {iconAndLabel}
      </div>
    );
  } else {
    return null;
  }
};

export default BtnEcran;
