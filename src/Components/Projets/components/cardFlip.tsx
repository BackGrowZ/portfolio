import react, { ReactElement, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { ICardFlip } from "../../../constante";
import "./style.css";
import BackCard from "./backCard/BackCard";
import FrontCard from "./FrontCard";

enum Mouse {
  FRONT,
  BACK,
}

const CardFlip = ({ general, front, back }: ICardFlip): ReactElement => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHoover = (e: any, face: Mouse) => {
    e.preventDefault();
    setIsFlipped(face === Mouse.FRONT ? true : false);
  };
  const flipDirection = general?.direction ? general.direction : "horizontal";

  return (
    <div onMouseEnter={(e) => handleHoover(e, Mouse.FRONT)} onMouseLeave={(e) => handleHoover(e, Mouse.BACK)}>
      <ReactCardFlip infinite isFlipped={isFlipped} flipDirection={flipDirection}>
        <FrontCard general={general} front={front} />
        <BackCard back={back} color={general?.color} />
      </ReactCardFlip>
    </div>
  );
};

export default CardFlip;
