import react from "react";
import { cardFlipData } from "../../constante";
import CardFlip from "./components/cardFlip";

const Project = () => {
  return (
    <>
      <h3>Portfolio</h3>
      <h4>Une partie des projets sur lesquels j'ai travaillé</h4>
      <div className="projectContainer">
        {cardFlipData.map((data, i) => (
          <CardFlip key={i} back={data.back} front={data.front} general={data.general} />
        ))}
      </div>
    </>
  );
};

export default Project;
