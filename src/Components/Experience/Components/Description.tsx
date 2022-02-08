import { ReactElement, useState } from "react";
import { IMissionDescription } from "../../../constante";
import Icon from "../../Icon";
import ReadMore from "./ReadMore";

const Description = ({ techno, task, presentation, poste, contrat, entreprise, date, lieu }: IMissionDescription): ReactElement => {
  const [readMore, setReadMore] = useState(false);

  const COLOR_ICON = "#1f819f";

  // Mise en Page
  const resultTask = typeof task === "string" ? <li>{task}</li> : task.map((e, i) => <li key={i}>{e}</li>);
  const resultPresentation = typeof presentation === "string" ? <p>{presentation}</p> : presentation.map((e, i) => <p key={i}>{e}</p>);
  const labelTask = typeof task === "string" ? "Tache principale" : "Taches principales";

  //Style
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
        <span>
          <Icon icon={"faTasks"} color={COLOR_ICON} /> {labelTask} :
        </span>
        <br />
        {resultTask}
        <br />
        <span>
          <Icon icon={"faLaptopCode"} color={COLOR_ICON} /> Technos :
        </span>
        <br />
        {techno}
      </div>
      <ReadMore used={readMore} click={() => setReadMore((e) => !e)} />
    </div>
  );
};

export default Description;
