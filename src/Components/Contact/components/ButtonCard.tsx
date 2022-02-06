import Icon from "../../Icon";

interface IButtonCard {
  label?: string;
  onClick: () => void;
  style?: object;
  className?: string;
  children?: any;
  icon?: string;
}

const ButtonCard = ({ style, onClick, label, className, children, icon }: IButtonCard) => {
  const iconResult = icon && (
    <span style={{ paddingRight: "5px" }}>
      <Icon icon={icon} />
    </span>
  );
  return (
    <div style={style} className={className ? className : "btnShowCarte"} onClick={onClick}>
      {iconResult} {children ? children : label}
    </div>
  );
};

export default ButtonCard;
