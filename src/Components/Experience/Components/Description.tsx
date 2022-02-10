import react, { ReactElement, useState } from "react";
import { IMissionDescription } from "../../../constante";
import DescFooter from "./DescFooter";
import ReadMore from "./ReadMore";

const Description = ({ techno, task, presentation, poste, contrat, entreprise, date, lieu }: IMissionDescription): ReactElement => {
  const [readMore, setReadMore] = useState(false);

  const COLOR_ICON = "#1f819f";

  // Mise en Page
  const resultPresentation = typeof presentation === "string" ? <p>{presentation}</p> : presentation.map((e, i) => <p key={i}>{e}</p>);

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
        <DescFooter color={COLOR_ICON} task={task} techno={techno} />
      </div>
      <ReadMore used={readMore} click={() => setReadMore((e) => !e)} />
    </div>
  );
};

export default Description;
