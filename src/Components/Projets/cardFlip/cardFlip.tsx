import { ReactElement, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { ICardFlip } from "../../../constante";
import Icon from "../../Icon";
import "./style.css";

const CardFlip = ({ general, front, back }: ICardFlip): ReactElement => {
  const { title, images } = front;
  const { link, finish, annee, techno, github } = back;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHoover = (e: any) => {
    e.preventDefault();
    setIsFlipped((flip) => !flip);
  };
  const styleColor = general?.color ? { background: general.color } : { background: "#ddd" };

  const goSite = link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      Visiter le site
    </a>
  ) : (
    "Indisponible"
  );
  const cursor = link ? { cursor: "pointer" } : { cursor: "not-allowed" };
  const isFinish = finish ? "Terminer" : "En cours de développement";
  const showTechno = typeof techno === "string" ? techno : techno.join(", ");
  const githubLink = github && (
    <p>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <Icon icon="faGithub" /> Lien GitHub
      </a>
    </p>
  );
  return (
    <div onMouseEnter={handleHoover} onMouseLeave={handleHoover}>
      <ReactCardFlip infinite isFlipped={isFlipped} flipDirection={general?.direction ? general.direction : "horizontal"}>
        <div style={styleColor} className="cardflipFront">
          <img alt={`${title}`} src={images ? images : "https://i.stack.imgur.com/O8z60.png"} />
          <div>{title}</div>
        </div>

        <div style={styleColor} className="cardflipBack">
          <div className="containerDetail">
            <p>Etat: {isFinish}</p>
            <p>Année: {annee}</p>
            <p>Techno: {showTechno}</p>
            {githubLink}
          </div>
          <div className="containerBtn">
            <div style={cursor} className="btn-Site">
              {goSite}
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default CardFlip;
