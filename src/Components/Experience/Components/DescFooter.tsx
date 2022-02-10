import react from "react";
import Icon from "../../Icon";

interface ILocalProps {
  color: string;
  task?: string | string[];
  techno?: string;
}

export default function DescFooter({ color, task, techno }: ILocalProps) {
  const label = task && (typeof task === "string" ? "Tache principale" : "Taches principales");
  const resultTask = task && (typeof task === "string" ? <li>{task}</li> : task.map((e, i) => <li key={i}>{e}</li>));
  return (
    <>
      <span>
        <Icon icon={"faTasks"} color={color} /> {label} :
      </span>
      <br />
      {resultTask}
      <br />
      <span>
        <Icon icon={"faLaptopCode"} color={color} /> Techno :
      </span>
      <br />
      {techno}
      <br />
    </>
  );
}
