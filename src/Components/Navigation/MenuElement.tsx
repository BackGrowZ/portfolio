import { Dispatch, ReactElement, SetStateAction } from "react";
import { menuItemList } from "../../constante";

interface ILocalProps {
  setShowEcran: Dispatch<SetStateAction<number>>;
  setOpen: () => void;
  open: boolean;
}

export default function MenuElement({ setShowEcran, setOpen, open }: ILocalProps): ReactElement {
  const handleClick = (id: number) => {
    setShowEcran(id);
    setOpen();
  };
  const result = menuItemList.map(
    (el, i) =>
      el.length > 1 && (
        <div key={i} className="menu-element">
          <span onClick={() => handleClick(i)} className="menu-element-text">
            {el}
          </span>
        </div>
      )
  );
  return open ? (
    <div className="menu">
      <div>{result}</div>
    </div>
  ) : (
    <></>
  );
}
