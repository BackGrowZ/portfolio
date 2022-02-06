import { ReactElement } from "react";
import { socialData } from "../../../constante";
import Icon from "../../Icon";

const SocialIcon = (): ReactElement => {
  const result = socialData.map((data, i) => {
    return (
      <a key={i} href={data.link} target="_blank" rel="noopener noreferrer">
        <Icon icon={data.icon} style={{ fontSize: "2rem" }} />
      </a>
    );
  });
  return <>{result}</>;
};

export default SocialIcon;
