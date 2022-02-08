import { ReactElement } from "react";
import { hardSkillData, softSkillData } from "../../constante";
import Pourcentage from "./Pourcentage";

const Skill = (): ReactElement => {
  return (
    <div className="skill">
      <div className="hardSkill">
        <h3>Hard Skill</h3>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {hardSkillData.map((e, i) => {
            return <Pourcentage key={`hardSkill-${i}`} name={e.name} pourcent={e.pourcentage} icon={e.icon} logo={e.logo} />;
          })}
        </div>
      </div>
      <div className="softSkill">
        <h3>Soft Skill</h3>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {softSkillData.map((e, i) => {
            return <Pourcentage key={`softSkill-${i}`} name={e.name} pourcent={e.pourcentage} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Skill;
