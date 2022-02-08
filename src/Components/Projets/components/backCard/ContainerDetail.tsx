import { ICardFlip } from "../../../../constante";
import Icon from "../../../Icon";

interface ILocalProps {
  back: ICardFlip["back"];
}

const containerDetail = ({ back }: ILocalProps) => {
  const { finish, annee, techno, github } = back;
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
    <div className="containerDetail">
      <p>Etat: {isFinish}</p>
      <p>Année: {annee}</p>
      <p>Techno: {showTechno}</p>
      {githubLink}
    </div>
  );
};

export default containerDetail;
