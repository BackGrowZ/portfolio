import { ReactElement } from "react";
import { hardSkillData, softSkillData } from "../../constante";
import ShowSkill from "./showSkill";

const Skill = (): ReactElement => {
  return (
    <div className="skill">
      <ShowSkill data={hardSkillData} title="Compétence technique" />
      <ShowSkill data={softSkillData} title="Compétence humaine" />
    </div>
  );
};
export default Skill;
