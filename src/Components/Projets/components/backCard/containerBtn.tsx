import react from "react";

interface ILocalProps {
  link: string | undefined;
}

const VisiteSite = ({ link }: ILocalProps) => {
  const cursor = link ? { cursor: "pointer" } : { cursor: "not-allowed" };
  const linkBalise = (
    <a href={link} target="_blank" rel="noopener noreferrer">
      Visiter le site
    </a>
  );

  return (
    <div className="containerBtn">
      <div style={cursor} className="btn-Site">
        {link ? linkBalise : "Indisponible"}
      </div>
    </div>
  );
};

export default VisiteSite;
