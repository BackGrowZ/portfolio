import { cardFlipData } from "../../constante";
import CardFlip from "./cardFlip/cardFlip";

const Project = () => {
  return (
    <div className="projectContainer">
      {cardFlipData.map((data, i) => {
        return <CardFlip key={i} back={data.back} front={data.front} general={data.general} />;
      })}
    </div>
  );
};

export default Project;
