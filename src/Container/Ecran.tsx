import Contact from "../Components/Contact/Contact";
import Experience from "../Components/Experience/Experience";
import Presentation from "../Components/Presentation/Presentation";
import Labs from "./Labs";

interface ILocalProps {
  idEcran: number;
}

const Ecran = ({ idEcran }: ILocalProps) => {
  let result = <Presentation />;
  switch (idEcran) {
    case 0:
      result = <Presentation />;
      break;
    case 1:
      result = <Experience />;
      break;
    case 2:
      result = <Labs />;
      break;
    case 3:
      result = <Contact />;
      break;
    default:
      <Presentation />;
      break;
  }
  return result;
};

export default Ecran;
