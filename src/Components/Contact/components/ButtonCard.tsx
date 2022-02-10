import Icon from "../../Icon";

interface IButtonCard {
  show: boolean;
  onClick: () => void;
  label?: string;
  style?: object;
  className?: string;
  children?: any;
  icon?: string;
}

const ButtonCard = ({ show, style, onClick, label, className, children, icon }: IButtonCard) => {
  const iconResult = icon && (
    <span style={{ paddingRight: "5px" }}>
      <Icon icon={icon} />
    </span>
  );
  return show ? (
    <div style={style} className={className ? className : "btnShowCarte"} onClick={onClick}>
      {iconResult} {children ? children : label}
    </div>
  ) : (
    <></>
  );
};

export default ButtonCard;
