import styles from "./Button.module.scss";

interface IProps {
  text: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: string;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<IProps> = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
