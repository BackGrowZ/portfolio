import react from "react";
import CardContact from "./components/CardContact";

const Contact = () => {
  const maps = (
    <iframe
      title="GoogleMaps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.8445062014157!2d-1.535344884189105!3d47.21962472262233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eec3eb9afe2f%3A0x53dbad2e4a3f9a0!2sMoutonnerie!5e0!3m2!1sfr!2sfr!4v1643895367806!5m2!1sfr!2sfr"
      className="contact-maps"
      loading="lazy"
    />
  );
  return (
    <div>
      <div className="contact">
        <CardContact />
        {maps}
      </div>
    </div>
  );
};

export default Contact;
