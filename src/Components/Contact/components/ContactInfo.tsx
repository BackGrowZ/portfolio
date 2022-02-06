import { ReactElement } from "react";
import { contactData } from "../../../constante";
import Icon from "../../Icon";

const ContactInfo = (): ReactElement => {
  const result = contactData.map((data, i) => {
    return (
      <div key={i} className="element">
        <Icon icon={data.icon} /> {data.link ? <a href={data.link}>{data.label}</a> : data.label}
      </div>
    );
  });
  return <>{result}</>;
};

export default ContactInfo;
