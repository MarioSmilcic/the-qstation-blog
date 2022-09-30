import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Hamburger from "../../assets/hamburger.svg";
import { NavModal } from "../../components/modal/Modal";
import { useState } from "react";

const Header = () => {
  const [modal, setModal] = useState(false);

  const OpenModalHandler = () => {
    setModal(true);
  };

  const CloseModalHandler = () => {
    setModal(false);
  };

  return (
    <>
      <header className={styles.header}>
        <h1>
          <Link to="/" onClick={CloseModalHandler}>
            The Blog
          </Link>
        </h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addNewPost">Add New Post</Link>
            </li>
          </ul>
        </nav>
        {!modal && (
          <img
            src={Hamburger}
            alt="hamburger"
            className={styles.img}
            onClick={OpenModalHandler}
          />
        )}
      </header>
      <div>{modal && <NavModal onClose={CloseModalHandler} />}</div>
    </>
  );
};

export default Header;
