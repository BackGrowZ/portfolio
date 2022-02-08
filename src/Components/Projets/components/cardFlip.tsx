import { ReactElement, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { ICardFlip } from "../../../constante";
import "./style.css";
import BackCard from "./backCard/BackCard";

const CardFlip = ({ general, front, back }: ICardFlip): ReactElement => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { title, images } = front;

  const handleHoover = (e: any) => {
    e.preventDefault();
    setIsFlipped((flip) => !flip);
  };
  const styleColor = general?.color ? { background: general.color } : { background: "#ddd" };
  const flipDirection = general?.direction ? general.direction : "horizontal";

  return (
    <div onMouseEnter={handleHoover} onMouseLeave={handleHoover}>
      <ReactCardFlip infinite isFlipped={isFlipped} flipDirection={flipDirection}>
        <div style={styleColor} className="cardflipFront">
          <img alt={`${title}`} src={images ? images : "https://i.stack.imgur.com/O8z60.png"} />
          <div>{title}</div>
        </div>

        <BackCard back={back} color={general?.color} />
      </ReactCardFlip>
    </div>
  );
};

export default CardFlip;
