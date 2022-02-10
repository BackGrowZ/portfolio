import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Icon from "../../Icon";

interface IPourcentage {
  name: string;
  pourcent: number;
  icon?: {
    name: string;
    style?: object;
  };
  logo?: {
    link: string;
    style?: object;
  };
}

const Pourcentage = ({ name, pourcent, icon, logo }: IPourcentage) => {
  const image = () => {
    if (icon) {
      return <Icon style={icon.style} icon={icon.name} />;
    }
    if (logo) {
      return <img style={logo.style} src={logo.link} alt={name} />;
    }
  };
  return (
    <div className="skill-Pourcentage">
      <CircularProgressbarWithChildren value={pourcent}>
        {image()}
        <div className="skill-Pourcentage-data">
          <strong>{pourcent}%</strong>
        </div>
      </CircularProgressbarWithChildren>
      {name}
    </div>
  );
};

export default Pourcentage;
