import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Icon from "../Icon";

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
    <div style={{ height: "100px", width: "100px", padding: "15px", margin: "15px" }}>
      <CircularProgressbarWithChildren value={pourcent}>
        {image()}
        <div style={{ fontSize: 12, marginTop: -2 }}>
          <strong>{pourcent}%</strong>
        </div>
      </CircularProgressbarWithChildren>
      {name}
    </div>
  );
};

export default Pourcentage;
