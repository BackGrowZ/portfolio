import { ISkillData } from "../../../constante";
import Pourcentage from "./Pourcentage";

interface ILocalProps {
  data: ISkillData[];
  title: string;
}

export default function ShowSkill({ data, title }: ILocalProps) {
  return (
    <div className="detailSkill">
      <h3>{title}</h3>
      <div className="skill-Container">
        {data.map((e, i) => (
          <Pourcentage key={`${e.name}-${i}`} name={e.name} pourcent={e.pourcentage} icon={e.icon} logo={e.logo} />
        ))}
      </div>
    </div>
  );
}
