import { ReactElement } from "react";
import { IMissionDescription } from "../../constante";
import Icon from "../Icon";

const Description = ({ techno, task, presentation, poste, contrat, entreprise, date, lieu }: IMissionDescription): ReactElement => {
  const resultTask = typeof task === "string" ? <li>{task}</li> : task.map((e, i) => <li key={i}>{e}</li>);
  const resultPresentation = typeof presentation === "string" ? <p>{presentation}</p> : presentation.map((e, i) => <p key={i}>{e}</p>);
  const labelTask = typeof task === "string" ? "Tache principale" : "Taches principales";
  const COLOR_ICON = "#1f819f";
  const title = (name: string, label: string) => (
    <>
      <Icon icon={name} color={COLOR_ICON} />
      {label} :
    </>
  );

  return (
    <div style={{ fontSize: "1rem" }}>
      <h4>
        {poste} {contrat && ` - ${contrat}`}
      </h4>
      <h5>
        {entreprise} {date && ` - ${date}`} {lieu && ` - ${lieu}`}
      </h5>
      {resultPresentation}
      <span>{title("faTasks", labelTask)}</span>
      <br />
      {resultTask}
      <br />
      <span>{title("faLaptopCode", "Technos")}</span>
      <br />
      {techno}
    </div>
  );
};

export default Description;
