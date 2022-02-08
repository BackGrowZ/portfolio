import Count from "./components/Count";

const Presentation = () => {
  return (
    <>
      <div className="presentation">
        <div>
          <img className="presentation-img" src="https://tinyurl.com/33rx5ppk" />
        </div>
        <div className="presentation-texte">
          <h2>Qui suis je ?</h2>
          <br />
          Je m'appelle <b>Anthony Carreta</b>, Nantais, développeur Front-End <b>React</b>.
          <br />
          L'esprit libre, je me suis majoritairement formé en <b>autodidacte.</b>
          <br />
          La <b>curiosité</b> et la compréhension des systèmes de développement des nouvelles génération m'intrigue et me passionne.
          <br />
          J'ai approfondie mes compétences en développement en suivant un programme d'accompagnement
          <br />
          Par ailleurs, l'hypnose m'a apporté des valeurs au quotidien.
          <br />
          Ces deux univers me permettent de m'<b>adapter</b> à tout type de mission.
          <br />
          La <b>communication</b> est une chose essentielle pour moi, car elle permet d'élever en maturité les projets dans lesquels je m’implique.
        </div>
      </div>
      <Count />
    </>
  );
};

export default Presentation;
