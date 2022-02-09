import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt, faGithub, faLinkedin, faReact, faBootstrap, faWordpress, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faEyeSlash, faMap } from "@fortawesome/free-regular-svg-icons";
import { faAngleLeft, faAngleRight, faBars, faEnvelope, faLaptopCode, faLocationArrow, faPhoneAlt, faTasks } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ReactElement } from "react";

export const getIcon = (name: string): IconDefinition => {
  let icon = faLocationArrow;
  switch (name) {
    case "faHtml5":
      icon = faHtml5;
      break;
    case "faAngleLeft":
      icon = faAngleLeft;
      break;
    case "faAngleRight":
      icon = faAngleRight;
      break;
    case "faBars":
      icon = faBars;
      break;
    case "faBootstrap":
      icon = faBootstrap;
      break;
    case "faCss3":
      icon = faCss3Alt;
      break;
    case "faLocationArrow":
      icon = faLocationArrow;
      break;
    case "faPhoneAlt":
      icon = faPhoneAlt;
      break;
    case "faEnvelope":
      icon = faEnvelope;
      break;
    case "faLinkedin":
      icon = faLinkedin;
      break;
    case "faGithub":
      icon = faGithub;
      break;
    case "faReact":
      icon = faReact;
      break;
    case "faGitAlt":
      icon = faGitAlt;
      break;
    case "faWordpress":
      icon = faWordpress;
      break;
    case "faLaptopCode":
      icon = faLaptopCode;
      break;
    case "faTasks":
      icon = faTasks;
      break;
    case "faMap":
      icon = faMap;
      break;
    case "faEyeSlash":
      icon = faEyeSlash;
      break;
    case "faCalendar":
      icon = faCalendar;
      break;
  }
  return icon;
};

interface IICon {
  icon: string;
  style?: object;
  color?: string;
}

const Icon = ({ icon, style, color }: IICon): ReactElement => {
  return <FontAwesomeIcon color={color} style={style} icon={getIcon(icon)} />;
};

export default Icon;
