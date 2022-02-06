import React, { ReactElement } from "react";
import { Chrono } from "react-chrono";
import { dateExperience, missionDescription } from "../../constante";
import Description from "./Description";

const Experience = (): ReactElement => {
  return (
    <Chrono hideControls disableAutoScrollOnClick disableClickOnCircle activeItemIndex={-1} items={dateExperience} mode="VERTICAL_ALTERNATING">
      {missionDescription.map((mission, i) => {
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
      })}
    </Chrono>
  );
};

export default Experience;
