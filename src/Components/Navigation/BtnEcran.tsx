import { useEffect, useState } from "react";
import { Page } from "../../App";
import Icon from "../Icon";

interface ILocalProps {
  showEcran: number;
  direction: "LEFT" | "RIGHT";
  onClick: () => void;
}

const BtnEcran = ({ showEcran, direction, onClick }: ILocalProps) => {
  const [isHoover, setIsHoover] = useState(false);

  useEffect(() => {
    setIsHoover(false);
  }, [showEcran]);

  const nbRef = direction === "RIGHT" ? 3 : 0;
  const upOrDown = direction === "RIGHT" ? 1 : -1;
  const ICON = direction === "RIGHT" ? "faAngleRight" : "faAngleLeft";
  const CLASS = direction === "RIGHT" ? "nav-Right" : "nav-Left";
  const Label = isHoover && <span className="nav-label">{Page[showEcran + upOrDown]}</span>;
  const iconAndLabel =
    direction === "RIGHT" ? (
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
      <div onMouseEnter={() => setIsHoover(true)} onMouseLeave={() => setIsHoover(false)} onClick={onClick} className={CLASS}>
        {iconAndLabel}
      </div>
    );
  } else {
    return null;
  }
};

export default BtnEcran;
