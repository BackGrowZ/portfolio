import react, { ReactElement, useState } from "react";
import { openPopupWidget } from "react-calendly";
import { URLCalendly } from "../../../constante";
import ButtonCard from "./ButtonCard";
import ContactInfo from "./ContactInfo";
import SocialIcon from "./SocialIcon";

const CardContact = (): ReactElement => {
  const [showContact, setShowContact] = useState(true);

  const onClickRDV = () => openPopupWidget({ url: URLCalendly });

  const card = (
    <>
      {showContact && (
        <div className="cardContact">
          <h2 className="title">Contact</h2>
          <div className="containerElement">
            <ContactInfo />
            <SocialIcon />
          </div>
          <div className="containerElement">
            <ButtonCard show={showContact} style={{ background: "#409940" }} onClick={onClickRDV} icon="faCalendar" label="Prendre RDV" />
            <ButtonCard show={showContact} onClick={() => setShowContact((e) => !e)} label="Voir la carte" icon="faMap" />
          </div>
        </div>
      )}
      <ButtonCard show={!showContact} className="btnMasquerCarte" label="Voir les info" icon="faEyeSlash" onClick={() => setShowContact((e) => !e)} />
    </>
  );

  return card;
};

export default CardContact;
