import { ReactElement } from "react";
import { socialData } from "../../../constante";
import Icon from "../../Icon";

const SocialIcon = (): ReactElement => {
  const result = socialData.map((data, i) => {
    return (
      <div className="element">
        <a style={{ textDecoration: "none" }} key={i} href={data.link} target="_blank" rel="noopener noreferrer">
          <Icon icon={data.icon} style={{ fontSize: "2rem" }} />{" "}
        </a>
      </div>
    );
  });
  return <>{result}</>;
};

export default SocialIcon;
