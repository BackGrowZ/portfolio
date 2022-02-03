import react, { useState } from "react";
import ButtonCard from "./ButtonCard";
import CardContactClass from "./CardClass";

const CardContact = () => {
  const [showContact, setShowContact] = useState(true);

  const tools = new CardContactClass();

  const btnShowContact = !showContact && <ButtonCard className="btnMasquerCarte" label="Voir les info" onClick={() => setShowContact((e) => !e)} />;
  const cardContactElement = tools.getContactInfo();
  const cardContactSocial = tools.getSocialIcon();

  const cardContact = showContact && (
    <div className="cardContact">
      <div className="title">Contact</div>
      <div className="containerElement">
        {cardContactElement}
        <div className="element">{cardContactSocial}</div>
      </div>
      <div className="containerElement">
        <ButtonCard style={{ background: "#409940" }} onClick={tools.onClickRDV} label="Prendre RDV" />
        <ButtonCard onClick={() => setShowContact((e) => !e)} label="Voir la carte" />
      </div>
    </div>
  );

  return (
    <>
      {cardContact}
      {btnShowContact}
    </>
  );
};

export default CardContact;
