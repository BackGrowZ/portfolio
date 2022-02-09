import { Dispatch, SetStateAction } from "react";
import { menuItemList } from "../../constante";
import BtnNavigation from "./BtnNavigation";

interface ILocalProps {
  open: boolean;
  showEcran: number;
  setOpen: () => void;
  setShowEcran: Dispatch<SetStateAction<number>>;
}
const Menu = ({ open, setOpen, setShowEcran, showEcran }: ILocalProps) => {
  const handleClick = (id: number) => {
    setShowEcran(id);
    setOpen();
  };

  const menuItems = menuItemList.map((el, i) => {
    return (
      el.length > 1 && (
        <div key={i} className="menu-element">
          <span onClick={() => handleClick(i)} className="menu-element-text">
            {el}
          </span>
        </div>
      )
    );
  });

  return (
    <>
      <BtnNavigation showEcran={showEcran} setOpen={setOpen} changeEcran={setShowEcran} />
      {open && (
        <div className="menu">
          <div>{menuItems}</div>
        </div>
      )}
    </>
  );
};

export default Menu;
