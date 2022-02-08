import { ReactElement, useEffect, useState } from "react";
import { IMissionDescription } from "../../../constante";
import Icon from "../../Icon";

const Description = ({ techno, task, presentation, poste, contrat, entreprise, date, lieu, id }: IMissionDescription): ReactElement => {
  const [readMore, setReadMore] = useState(false);

  const resultTask = typeof task === "string" ? <li>{task}</li> : task.map((e, i) => <li key={i}>{e}</li>);
  const resultPresentation = typeof presentation === "string" ? <p>{presentation}</p> : presentation.map((e, i) => <p key={i}>{e}</p>);
  const labelTask = typeof task === "string" ? "Tache principale" : "Taches principales";
  const COLOR_ICON = "#1f819f";

  const linkReadMore = (
    <p className="description-link" onClick={() => setReadMore((e) => !e)}>
      {!readMore ? "En savoir plus..." : "Réduire..."}
    </p>
  );

  const title = (name: string, label: string) => (
    <>
      <Icon icon={name} color={COLOR_ICON} /> {label} :
    </>
  );
  const styleDescriptionMain = { overflow: !readMore ? "hidden" : "visible" };
  const styleDescription = !readMore ? { height: "230px", overflow: "hidden" } : {};

  return (
    <div className="description-main" style={styleDescriptionMain}>
      <div style={styleDescription}>
        <h3 className="description-title">
          {poste} {contrat && ` - ${contrat}`}
        </h3>
        <h4 className="description-title">
          {entreprise} {date && ` - ${date}`} {lieu && ` - ${lieu}`}
        </h4>
        {resultPresentation}
        <span>{title("faTasks", labelTask)}</span>
        <br />
        {resultTask}
        <br />
        <span>{title("faLaptopCode", "Technos")}</span>
        <br />
        {techno}
      </div>
      {linkReadMore}
    </div>
  );
};

export default Description;
