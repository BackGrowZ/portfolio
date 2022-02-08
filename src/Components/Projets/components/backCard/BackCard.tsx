import { ICardFlip } from "../../../../constante";
import VisiteSite from "./containerBtn";
import ContainerDetail from "./ContainerDetail";

interface ILocalProps {
  back: ICardFlip["back"];
  color: string | undefined;
}

const BackCard = ({ back, color }: ILocalProps) => {
  const styleColor = color ? { background: color } : { background: "#ddd" };
  return (
    <div style={styleColor} className="cardflipBack">
      <ContainerDetail back={back} />
      <VisiteSite link={back.link} />
    </div>
  );
};

export default BackCard;
