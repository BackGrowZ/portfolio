import React, { ReactElement } from "react";
import { Chrono } from "react-chrono";
import { dateExperience, missionDescription } from "../../constante";
import Description from "./Components/Description";

const Experience = (): ReactElement => {
  const test = missionDescription.map((mission, i) => {
    return (
      <Description
        key={i}
        presentation={mission.presentation}
        task={mission.task}
        techno={mission.techno}
        poste={mission.poste}
        contrat={mission.contrat}
        entreprise={mission.entreprise}
        date={mission.date}
        lieu={mission.lieu}
      />
    );
  });
  return (
    <div style={{ width: "100%" }}>
      <Chrono
        hideControls
        disableAutoScrollOnClick
        disableClickOnCircle
        activeItemIndex={-1}
        cardHeight={300}
        useReadMore
        cardWidth={485.4}
        items={dateExperience}
        mode="VERTICAL_ALTERNATING"
      >
        {test}
      </Chrono>
    </div>
  );
};

export default Experience;
