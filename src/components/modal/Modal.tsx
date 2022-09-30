import styles from "./Modal.module.scss";
import Close from "../../assets/exit.svg";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

interface IProps {
  onClose?: () => void;
}

export const NavModal: React.FC<IProps> = ({ onClose }) => {
  return (
    <div className={styles.modal}>
      <img src={Close} alt="close" onClick={onClose} className={styles.img} />
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={onClose}>
              Home
            </Link>
          </li>
          <li>
            <Link to="post" onClick={onClose}>
              Add New Post
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Modal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <NavModal />,
        document.getElementById("modal-root") as HTMLElement
      )}
    </>
  );
};
export default Modal;
