interface IButtonCard {
  label: string;
  onClick: () => void;
  style?: object;
  className?: string;
}

const ButtonCard = ({ style, onClick, label, className }: IButtonCard) => {
  return (
    <div style={style} className={className ? className : "btnShowCarte"} onClick={onClick}>
      {label}
    </div>
  );
};

export default ButtonCard;
