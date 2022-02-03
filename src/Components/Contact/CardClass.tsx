import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { openPopupWidget } from "react-calendly";
import { getIcon } from "../../utils";
import { contactData, socialData, URLCalendly } from "../../constante";

class CardContactClass {
  onClickRDV = () => openPopupWidget({ url: URLCalendly });

  getSocialIcon = () =>
    socialData.map((data) => {
      return (
        <>
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon style={{ fontSize: "2rem" }} icon={getIcon(data.icon)} />
          </a>{" "}
        </>
      );
    });

  getContactInfo = () =>
    contactData.map((data) => {
      return (
        <div className="element">
          <FontAwesomeIcon icon={getIcon(data.icon)} /> {data.link ? <a href={data.link}>{data.label}</a> : data.label}
        </div>
      );
    });
}

export default CardContactClass;
