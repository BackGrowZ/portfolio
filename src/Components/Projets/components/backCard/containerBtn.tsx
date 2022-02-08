interface ILocalProps {
  link: string | undefined;
}

const VisiteSite = ({ link }: ILocalProps) => {
  const cursor = link ? { cursor: "pointer" } : { cursor: "not-allowed" };

  return (
    <div className="containerBtn">
      <div style={cursor} className="btn-Site">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Visiter le site
          </a>
        ) : (
          "Indisponible"
        )}
      </div>
    </div>
  );
};

export default VisiteSite;
