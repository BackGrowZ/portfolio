import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import { getIcon } from "../../utils";
import { IData } from "../../constante";

const Description = ({ techno, task, presentation, poste, contrat, entreprise, date, lieu }: IData): ReactElement => {
  const resultTask = typeof task === "string" ? <li>{task}</li> : task.map((e, i) => <li key={i}>{e}</li>);
  const resultPresentation = typeof presentation === "string" ? <p>{presentation}</p> : presentation.map((e, i) => <p key={i}>{e}</p>);
  const labelTask = typeof task === "string" ? "Tache principale" : "Taches principales";
  const COLOR_ICON = "#1f819f";
  const desc = (name: string, label: string) => (
    <>
      <FontAwesomeIcon icon={getIcon(name)} color={COLOR_ICON} /> {label} :
    </>
  );

  return (
    <div style={{ fontSize: "1.2rem" }}>
      <h4>
        {poste} {contrat && ` - ${contrat}`}
      </h4>
      <h5>
        {entreprise} {date && ` - ${date}`} {lieu && ` - ${lieu}`}
      </h5>
      {resultPresentation}
      <span>{desc("faTasks", labelTask)}</span>
      <br />
      {resultTask}
      <br />
      <span>{desc("faLaptopCode", "Technos")}</span>
      <br />
      {techno}
    </div>
  );
};

export default Description;
