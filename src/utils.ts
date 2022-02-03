import { faGitAlt, faGithub, faLinkedin, faReact, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLaptopCode, faLocationArrow, faPhoneAlt, faTasks } from "@fortawesome/free-solid-svg-icons";

export const getIcon = (name: string) => {
  let icon = faLocationArrow;
  switch (name) {
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
  }
  return icon;
};
