import react from "react";
import { ICardFlip } from "../../../constante";

interface ILocalProps {
  general: ICardFlip["general"];
  front: ICardFlip["front"];
}

export default function FrontCard({ general, front }: ILocalProps) {
  const { title, images } = front;
  const styleColor = general?.color ? { background: general.color } : { background: "#ddd" };
  return (
    <div style={styleColor} className="cardflipFront">
      <img alt={`${title}`} src={images ? images : "https://i.stack.imgur.com/O8z60.png"} />
      <div>{title}</div>
    </div>
  );
}
