import { missionDescription } from "../../../constante";
import CountUp from "react-countup";

const Count = () => {
  interface Icompteur {
    label: string;
    value: number | string;
  }
  const difJour = (date: string): number => {
    const depart = new Date(date);
    const Diff_temps = Date.now() - depart.getTime();
    const Diff_jours = Diff_temps / (1000 * 3600 * 24);
    return Math.round(Diff_jours);
  };

  const heureDeDev = difJour("01/01/2020") * 6.5;
  const jourSurTerre = difJour("06/28/1995");

  const compteur: Icompteur[] = [
    {
      label: "Jours sur terre",
      value: jourSurTerre,
    },
    {
      label: "Heures à coder",
      value: heureDeDev,
    },
    {
      label: "Nombres de clients",
      value: missionDescription.length,
    },
    {
      label: "Disponibilité",
      value: "ASAP",
    },
  ];

  const showCompteur = compteur.map((e) => {
    const countUp = typeof e.value === "string" ? e.value : <CountUp duration={3} end={e.value} />;
    return (
      <div className="presentation-case-compteur">
        <div className="label-compteur">{e.label}</div>
        <div className="value-compteur">{countUp}</div>
      </div>
    );
  });
  return <div className="container-compteur">{showCompteur}</div>;
};

export default Count;
