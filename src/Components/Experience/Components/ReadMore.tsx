import { Dispatch, SetStateAction } from "react";

interface ILocalProps {
  click: () => void;
  used: boolean;
}

const ReadMore = ({ click, used }: ILocalProps) => {
  return (
    <p className="description-link" onClick={() => click()}>
      {!used ? "En savoir plus..." : "Réduire..."}
    </p>
  );
};

export default ReadMore;
